import React from "react";
import PropTypes from "prop-types";

function GetInfo(props) {
  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={props.handleName}>
        <div>
          name:{" "}
          <input
            onChange={(e) => {
              props.setNewName(e.target.value);
            }}
          />
        </div>
        <div>
          phone number:
          <input
            onChange={(e) => {
              props.setNewPhone(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}

GetInfo.propTypes = {};

export default GetInfo;
