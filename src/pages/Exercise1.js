import { useEffect, useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import ResultComponent from "./ResultComponent";

const Exercise1 = () => {
  const [name, setName] = useLocalStorage("name", "");
  const ref = useRef();

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.value = name;
    }
  }, [name]);

  const handleSubmit = () => ref && ref.current && setName(ref.current.value);

  return (
    <div>
      <h1> Exercise 1</h1>
      <input ref={ref} type="text" id="name" name="name" placeholder={name} />
      <button type="button" className="btn btn-primary m-2" onClick={handleSubmit}>
        Submit
      </button>
      <ResultComponent />
    </div>
  );
};

export default Exercise1;
