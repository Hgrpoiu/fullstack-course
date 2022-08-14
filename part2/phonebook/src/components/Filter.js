import React from "react";
import PropTypes from "prop-types";

function Filter(props) {
  return (
    <>
      <h2>Filter phonebook</h2>
      <div>
        <form>
          Filter for <input onChange={props.handleFilter} />
        </form>
      </div>
    </>
  );
}

Filter.propTypes = {};

export default Filter;
