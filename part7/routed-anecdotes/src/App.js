import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ZoomedAnec from "./components/ZoomedAnec";
import Notification from "./components/Notification";
import { useField } from "./hooks/useField";

const Menu = () => {
  const padding = {
    paddingRight: 5,
  };
  return (
    <div>
      <Link to="/" style={padding}>
        anecdotes
      </Link>
      <Link to="/create" style={padding}>
        create new
      </Link>
      <Link to="/about" style={padding}>
        about
      </Link>
    </div>
  );
};

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id}>
          <Link key={anecdote.id} to={`/anecdotes/${anecdote.id}`}>
            {anecdote.content}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>
      An anecdote is a brief, revealing account of an individual person or an
      incident. Occasionally humorous, anecdotes differ from jokes because their
      primary purpose is not simply to provoke laughter but to reveal a truth
      more general than the brief tale itself, such as to characterize a person
      by delineating a specific quirk or trait, to communicate an abstract idea
      about a person, place, or thing through the concrete details of a short
      narrative. An anecdote is "a story with a point."
    </em>

    <p>
      Software engineering is full of excellent anecdotes, at this app you can
      find the best and add more.
    </p>
  </div>
);

const Footer = () => (
  <div>
    Anecdote app for <a href="https://fullstackopen.com/">Full Stack Open</a>.
    See{" "}
    <a href="https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js">
      https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js
    </a>{" "}
    for the source code.
  </div>
);

const CreateNew = (props) => {
  const content = useField("text");
  const author = useField("text");
  const info = useField("text");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: content.input.value,
      author: author.input.value,
      info: info.input.value,
      votes: 0,
    });
    props.setNotif(`${content.input.value} by ${author.input.value} was added!`);
    nav("/");
    setTimeout(() => {
      props.setNotif(null);
    }, 5000);
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form
        onSubmit={handleSubmit}
        onReset={() => {
          content.reset();
          author.reset();
          info.reset();
        }}
      >
        <div>
          content
          <input name="content" {...content.input} />
        </div>
        <div>
          author
          <input name="author" {...author.input} />
        </div>
        <div>
          url for more info
          <input name="info" {...info.input} />
        </div>
        <button type="submit">create</button>
        <button type="reset">reset</button>
      </form>
    </div>
  );
};

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ]);

  const [notification, setNotification] = useState("");

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <Notification msg={notification} />
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/create"
          element={<CreateNew setNotif={setNotification} addNew={addNew} />}
        />
        {anecdotes.map((a) => {
          return (
            <Route
              path={`/anecdotes/${a.id}`}
              element={<ZoomedAnec anec={a} key={a.id} />}
            />
          );
        })}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
