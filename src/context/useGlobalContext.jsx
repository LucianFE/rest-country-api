import { useContext } from "react";
import { AppContext } from "./GlobalContext";

export const useGlobalContext = () => {
  return useContext(AppContext);
};
