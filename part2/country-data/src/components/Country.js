import React from "react";
import PropTypes from "prop-types";
import GetCapitalWeather from "./GetCapitalWeather";

function Country(props) {
  return (
    <div>
      <h3>{props.country.name.common}</h3>
      <div>
        <p>Capital: {props.country.capital}</p>
        <p>Area: {props.country.area}</p>
        <h4>Languages</h4>
        <ul>
          {Object.values(props.country.languages).map((lang) => {
            return <li key={lang}>{lang}</li>;
          })}
        </ul>
        <img
          src={props.country.flags.png}
          alt={props.country.name.common + "flag"}
        />
        <h3>Weather in {props.country.capital}</h3>
        <GetCapitalWeather country={props.country} />
      </div>
    </div>
  );
}

Country.propTypes = {};

export default Country;
