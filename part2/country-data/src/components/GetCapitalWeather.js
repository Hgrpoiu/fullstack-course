import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";

function GetCapitalWeather(props) {
  const [weather, setWeather] = useState({});
  const [gotten,setgot]=useState(false)

  useEffect(() => {
    const latlng = props.country.capitalInfo.latlng;
    const apiKey = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${apiKey}`
      )
      .then((data) => {
        setgot(true);
        setWeather(data.data);
      });
  }, []);

  if(gotten){
    return (
        <div>
          <div>Temperature: {weather.weather[0].description}</div>
          <div>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
          </div>
          <div>
            Direction: {weather.wind.deg} degrees at {weather.wind.speed} m/s
          </div>
        </div>
      );
  }else{
    return (<div></div>)
  }
}

GetCapitalWeather.propTypes = {};

export default GetCapitalWeather;
