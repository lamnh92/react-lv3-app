import { useState } from "react";

const useBoolean = (initValue) => {
  const [value, setValue] = useState(initValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  return [value, setTrue, setFalse];
};

export default useBoolean;
