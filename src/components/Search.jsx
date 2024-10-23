import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context/useGlobalContext";
function Search() {
  const { searchCountry, handleSearch, setSearchCountry } = useGlobalContext();

  return (
    <form className="search flex" onSubmit={handleSearch}>
      <label htmlFor="search">
        <button type="submit" className="search-btn">
          <FaSearch />
        </button>
      </label>
      <input
        type="search"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="Search for a country..."
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
      />
    </form>
  );
}

export default Search;
