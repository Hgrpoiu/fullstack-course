import { useState } from "react";
import Vote from "./components/Vote";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setvotes] = useState([0,0,0,0,0,0,0]);
  function voteHandler() {
    const copy=[...votes]
    copy[selected]+=1
    setvotes(copy);
  }

  let mostVotes=anecdotes[0];
  let aneVote=0;
  for(let i=0;i<votes.length;i++){
    if(votes[i]>aneVote){
      aneVote=votes[i];
      mostVotes=anecdotes[i];
    }
  }

  return (
    <div>
      {anecdotes[selected]}
      <div>
        <Vote sel={selected} voteHandler={voteHandler} votes={votes} />
        <button
          onClick={() => {
            setSelected(Math.floor(Math.random() * 7));
          }}
        >
          New ancedote
        </button>
      </div>
      <h2>Ancedote with the most votes</h2>
      <div>
        {mostVotes}
        <div>
          has {aneVote} votes.
        </div>
      </div>
    </div>
  );
};

export default App;
