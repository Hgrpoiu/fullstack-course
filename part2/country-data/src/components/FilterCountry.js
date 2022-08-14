import React from "react";
import PropTypes from "prop-types";

function FilterCountry(props) {
  return (
    <div>
      <form>
        Filter countries:{" "}
        <input
          onChange={(e) => {
            props.setFilter(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

FilterCountry.propTypes = {};

export default FilterCountry;
