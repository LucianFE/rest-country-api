import { useGlobalContext } from "../context/useGlobalContext";

function CountryCard({ numericCode, name, population, region, capital, flag }) {
  const { handleOpenDetails, formatNumber } = useGlobalContext();
  return (
    <div className="card" onClick={() => handleOpenDetails(numericCode)}>
      <img src={flag} alt={name} className="card-flag" />

      <div className="country-info">
        <h2>{name}</h2>
        <p>
          Population: <span>{formatNumber(population)}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
