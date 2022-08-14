import React from "react";
import PropTypes from "prop-types";
import Country from "./Country";
import { useState } from "react";

function DisplayCountry(props) {
    const [showing,setShow]=useState({country:{},showing:false})
    let content;

  function handleShow(index) {
    return () => {
        setShow({country:props.countries[index],showing:true})
    };
  }

  if (props.countries.length > 10) {
    content = (
      <>
        <p>Too many matches, make your filter more specific</p>
      </>
    );
  } else if (props.countries.length > 1) {
    content = (
      <>
        {props.countries.map((country, index) => {
          return (
            <div key={country.name.common}>
              {country.name.common}{" "}
              <button onClick={handleShow(index)}>show</button>
            </div>
          );
        })}
      </>
    );
  } else if (props.countries.length === 1) {
    content = (
      <>
        <Country id={props.countries[0].name.common} country={props.countries[0]} />
      </>
    );
    if(showing){
        setShow(false);
    }
  }

  if(showing.showing){
    return (<>
        <div>{content}</div>
        <Country country={showing.country}/>
    </>)
  }else{
    return(<>{content}</>)
  }
}

DisplayCountry.propTypes = {};

export default DisplayCountry;
