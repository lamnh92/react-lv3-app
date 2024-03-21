import useLocalStorage from "../hooks/useLocalStorage";

const ResultComponent = () => {
  const [name] = useLocalStorage("name");
  return (
    <div>
      <h4>Check value local storage</h4>
      <span>key: name</span>
      <br />
      <span>value: {name}</span>
    </div>
  );
};

export default ResultComponent;
