import Filters from "./Filters";
import Search from "./Search";

function ToolsContainer() {
  return (
    <div className="tools-container flex">
      <Search />
      <Filters />
    </div>
  );
}

export default ToolsContainer;
