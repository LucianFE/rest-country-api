import { useGlobalContext } from "../context/useGlobalContext";

import CountryCard from "./CountryCard";

function CountryList() {
  const { countries } = useGlobalContext();

  return (
    <section className="country-list">
      {countries.map((country) => (
        <CountryCard key={country.numericCode} {...country} />
      ))}
    </section>
  );
}

export default CountryList;
