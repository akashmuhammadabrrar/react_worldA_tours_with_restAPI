const CountryData = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  console.log(
    "inside country data",
    country,
    handleVisitedCountry,
    handleVisitedFlags
  );
  return (
    <div>
      <small>Country Data: {country.name.common}</small>
    </div>
  );
};

export default CountryData;
