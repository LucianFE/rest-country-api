import { FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "../context/useGlobalContext";
import { nanoid } from "nanoid";

function Filters() {
  const { countryList, handleFilterByRegion, isOpen, setIsOpen } =
    useGlobalContext();

  const regions = [
    "All Countries",
    ...new Set(countryList.map((country) => country.region)),
  ];

  return (
    <div className="select-container flex">
      <div className="selected-option flex" onClick={() => setIsOpen(!isOpen)}>
        Filter by Region <FaChevronDown />
      </div>
      {isOpen && (
        <div className="options-list">
          {regions.map((region) => (
            <div
              className="option"
              key={nanoid()}
              onClick={() => handleFilterByRegion(region)}
            >
              {region}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filters;
