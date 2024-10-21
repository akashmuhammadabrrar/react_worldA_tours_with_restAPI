import "./Countries.css";

import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  // marking country function
  const handleVisitedCountry = (country) => {
    console.log("handle country marked");
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  //  adding flags functionality
  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlags);
  };

  // remove item from an in a state
  // use filter to select all the elements except the one you want to remove

  return (
    <div>
      <h3>Countries All Over The World</h3>
      <h4>All Countries: {countries.length}</h4>
      {/* lists of visited country */}
      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="flag_container">
        {visitedFlag.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>
      {/* display countries */}
      <div className="country_container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
