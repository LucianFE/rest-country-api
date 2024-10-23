import { createContext, useEffect, useState } from "react";
import countryList from "../data/data.json";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [currentCountry, setCurrentCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCountries(countryList);
  }, []);

  const handleOpenDetails = (id) => {
    const selectedCountry = countryList.find(
      (country) => country.numericCode === id
    );
    setCurrentCountry(selectedCountry);
    console.log(selectedCountry);
    setShowDetails(true);
  };
  const handleBack = () => {
    setCurrentCountry({});
    setShowDetails(false);
  };
  const handleBorders = (value) => {
    const selectedCountry = countryList.find(
      (country) => country.alpha3Code === value
    );
    setCurrentCountry(selectedCountry);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const findCountry = countryList.find(
      (country) => country.name.toLowerCase() === searchCountry.toLowerCase()
    );
    if (!findCountry) {
      setSearchCountry("");
      return;
    }
    setCurrentCountry(findCountry);
    setShowDetails(true);
  };
  const handleFilterByRegion = (value) => {
    if (value === "All Countries") {
      setCountries(countryList);
      setIsOpen(false);
    } else {
      const filteredCountry = countryList.filter(
        (country) => country.region === value
      );
      setCountries(filteredCountry);
      setIsOpen(false);
    }
  };

  const formatNumber = (num) => {
    if (!num) return "";
    return new Intl.NumberFormat("en-US").format(num);
  };

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        showDetails,
        setShowDetails,
        countryList,
        countries,
        currentCountry,
        handleOpenDetails,
        handleBack,
        handleBorders,
        searchCountry,
        setSearchCountry,
        handleSearch,
        handleFilterByRegion,
        setIsOpen,
        isOpen,
        formatNumber,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
