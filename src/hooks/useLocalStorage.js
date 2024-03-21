import { useCallback, useContext, useEffect } from "react";
import LocalStorageContext from "../context/LocalStorageContext";
import { isNull } from "../utils/Utils";

const useLocalStorage = (key, initValue) => {
  const { localStorage, setLocalStorage } = useContext(LocalStorageContext);

  const setValue = useCallback(
    (value) => {
      setItem(key, value);
      const obj = { ...localStorage };
      obj[key] = value;
      setLocalStorage({ ...obj });
    },
    // eslint-disable-next-line
    [key, localStorage]
  );

  const getValue = useCallback(
    () =>
      Object.keys(localStorage).includes(key) ? localStorage[key] : initValue,
    [initValue, key, localStorage]
  );

  useEffect(() => {
    const obj = { ...localStorage };
    let val = getItem(key) || initValue;
    obj[key] = val;
    setLocalStorage({ ...obj });
    // eslint-disable-next-line
  }, [initValue, key]);

  useEffect(() => {
    const handleChangeValue = (e) => {
      const obj = { ...localStorage };
      if (e.key) {
        if (
          Object.keys(obj).every((objKey) => e.key === objKey) &&
          !isNull(e.newValue)
        ) {
          if (typeof e.newValue === "object") {
            obj[key] = JSON.parse(e.newValue);
          } else {
            obj[key] = e.newValue;
          }
        } else {
          obj[key] = initValue;
        }
        setLocalStorage({ ...obj });
      }
    };

    window.addEventListener("storage", handleChangeValue);
    return () => {
      window.removeEventListener("storage", handleChangeValue);
    };
    // eslint-disable-next-line
  }, [key, localStorage]);

  return [getValue(), setValue];
};

const getItem = (key, initValue) => {
  const val = localStorage.getItem(key);
  if (isNull(val)) return initValue;
  try {
    return JSON.parse(val);
  } catch (error) {
    return val;
  }
};

const setItem = (key, newValue) => {
  localStorage.setItem(key, JSON.stringify(newValue));
};

export default useLocalStorage;
