import CountryList from "./components/CountryList";
import DetailsPage from "./components/DetailsPage";
import Header from "./components/Header";
import ToolsContainer from "./components/ToolsContainer";
import { useGlobalContext } from "./context/useGlobalContext";

function App() {
  const { isDarkMode, showDetails } = useGlobalContext();
  return (
    <main className={isDarkMode ? "main-content" : "main-content light-mode"}>
      <Header />
      {showDetails ? (
        <DetailsPage />
      ) : (
        <>
          <ToolsContainer />
          <CountryList />
        </>
      )}

      {/*  */}
    </main>
  );
}

export default App;
