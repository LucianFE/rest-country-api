import { FaArrowLeft } from "react-icons/fa";
import { useGlobalContext } from "../context/useGlobalContext";
import { nanoid } from "nanoid";

function DetailsPage() {
  const { currentCountry, handleBack, handleBorders, formatNumber } =
    useGlobalContext();
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = currentCountry;

  return (
    <div className="details">
      <div className="details-container">
        <button className="btn flex" onClick={handleBack}>
          <FaArrowLeft /> Back
        </button>
        <div className="country-details">
          <img src={flag} alt={name} className="flag" />
          <div className="country-all-details">
            <h2>{name}</h2>
            <div className="details-data">
              <div className="first-col">
                {nativeName && (
                  <p>
                    Native Name: <span>{nativeName}</span>
                  </p>
                )}
                {population && (
                  <p>
                    Population: <span>{formatNumber(population)}</span>
                  </p>
                )}
                {region && (
                  <p>
                    Region: <span>{region}</span>
                  </p>
                )}
                {subregion && (
                  <p>
                    Sub Region: <span>{subregion}</span>
                  </p>
                )}

                {capital && (
                  <p>
                    Capital: <span>{capital}</span>
                  </p>
                )}
              </div>
              <div className="second-col">
                <p>
                  Top Level Domain:{" "}
                  {topLevelDomain.map((item) => (
                    <span key={nanoid()}>{item}</span>
                  ))}{" "}
                </p>
                {currencies && (
                  <p>
                    Currencies: <span>{currencies.name}</span>
                  </p>
                )}

                {languages && (
                  <p>
                    Languages:{" "}
                    <span>{languages.map((item) => item.name).join(", ")}</span>
                  </p>
                )}
              </div>
            </div>
            {borders && (
              <div className="borders flex">
                <p>Border Countries: </p>
                {borders.map((border) => (
                  <button
                    className="btn"
                    key={nanoid()}
                    onClick={() => handleBorders(border)}
                  >
                    {border}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
