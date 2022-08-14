import DisplayCountry from "./components/DisplayCountry";
import FilterCountry from "./components/FilterCountry";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [country, setCountry] = useState([]);
  const [newFilter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((data) => {
      setCountry(data.data);
    });
  }, []);

  return (
    <div>
      <div>
        <h2>Filter for a country</h2>
        <FilterCountry setFilter={setFilter} />
      </div>
      <div>
        <h2>Countries</h2>
        <DisplayCountry
          countries={country.filter((country) => {
            const lowFilter = newFilter.toLowerCase();
            const lowCountry = country.name.common.toLowerCase();

            for (let i = 0; i < newFilter.length; i++) {
              if (lowFilter.charAt(i) !== lowCountry.charAt(i)) {
                return false;
              }
            }

            return true;
          })}
        />
      </div>
    </div>
  );
}

export default App;
