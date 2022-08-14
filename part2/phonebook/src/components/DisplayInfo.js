import React from "react";
import PropTypes from "prop-types";

function DisplayInfo(props) {
  return (
    <>
      <h2>Numbers</h2>
      <div>
        {props.persons.map((person) => {
          return (
            <div key={person.name}>
              {person.name}, {person.number} <button onClick={props.handleDelete(person.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

DisplayInfo.propTypes = {};

export default DisplayInfo;
