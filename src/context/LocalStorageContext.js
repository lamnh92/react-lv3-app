import { createContext } from "react";

const LocalStorageContext = createContext({
  localStorage: {},
  setLocalStorage: () => {},
});

export default LocalStorageContext;
