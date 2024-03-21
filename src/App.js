import { useState } from "react";
import "./App.css";
import LocalStorageContext from "./context/LocalStorageContext";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import Exercise3 from "./pages/Exercise3";

function App() {
  const [localStorage, setLocalStorage] = useState({});

  return (
    <LocalStorageContext.Provider value={{ localStorage, setLocalStorage }}>
      <div className="m-4 gap-5">
        <Exercise1 />

        <Exercise2 />

        <Exercise3 />
      </div>
    </LocalStorageContext.Provider>
  );
}

export default App;
