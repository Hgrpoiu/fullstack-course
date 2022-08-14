import { useEffect, useState } from "react";
import DisplayInfo from "./components/DisplayInfo";
import Filter from "./components/Filter";
import GetInfo from "./components/GetInfo";
import axios from "axios";
import contacts from "./services/contacts";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setFilter] = useState("");
  const [msg, setMsg] = useState(null);
  const [error,setError]=useState(false);

  useEffect(() => {
    contacts.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  function handleName(e) {
    e.preventDefault();
    let index = 0;
    if (
      persons.some((person, i) => {
        index = i;
        return person.name === newName;
      })
    ) {
      contacts
        .update(newName, newPhone, persons[index].id)
        .then((response) => {
          let copy = persons.slice();
          copy[index] = response.data;
          setPersons(copy);
          setMsg(`${newName} was updated`);
        })
        .catch((error) => {
          setError(true);
          setMsg(`${newName} was already removed from the server :(`);
        });
    } else {
      contacts.create(newName, newPhone).then((response) => {
        setPersons(persons.concat(response.data));
        setMsg(`${newName} was added`);
      });
    }
  }

  function handleDelete(id) {
    return () => {
      if (window.confirm("Are you sure you want to delete this?")) {
        contacts.remove(id).then(
          setPersons(
            persons.filter((person) => {
              return person.id !== id;
            })
          )
        );
      }
    };
  }
  
  return (
    <div>
      <Notification message={msg} error={error} setMsg={setMsg} setError={setError} />
      <Filter
        handleFilter={(e) => {
          setFilter(e.target.value);
        }}
      />
      <GetInfo
        handleName={handleName}
        setNewName={setNewName}
        setNewPhone={setNewPhone}
      />
      <DisplayInfo
        handleDelete={handleDelete}
        persons={persons.filter((person) => {
          const lowFilter = newFilter.toLowerCase();
          const lowPerson = person.name.toLowerCase();

          for (let i = 0; i < newFilter.length; i++) {
            if (lowFilter.charAt(i) !== lowPerson.charAt(i)) {
              return false;
            }
          }

          return true;
        })}
      />
    </div>
  );
};

export default App;
