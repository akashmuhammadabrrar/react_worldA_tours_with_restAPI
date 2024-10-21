import { useState } from "react";
import "./Country.css";
import CountryDetails from "../../CountryDetails/CountryDetails";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, capital, continents, maps, population, cca3 } = country;

  const [visit, setVisit] = useState(false);

  const handleVisited = () => {
    setVisit(!visit);
  };

  return (
    <div className={`country ${visit ? "visited" : "no-visited"}`}>
      <h3 style={{ color: visit ? "purple" : "goldenrod" }}>
        Name: {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Capital City: {country?.capital}</p>
      <p>Continents: {country.continents}</p>
      <p>Population: {country?.population}</p>
      <p>
        Maps:{" "}
        <a href={country.maps.googleMaps} target="blank">
          Go on
        </a>
      </p>
      <p>
        <small>Code: {country.cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <br />
      <button onClick={handleVisited}>
        {visit ? "Already Visited" : "Going"}
      </button>
      {visit ? "I have visited the country" : "I want to visit "}
      <hr />
      <CountryDetails
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}></CountryDetails>
    </div>
  );
};

export default Country;
