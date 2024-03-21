import { useEffect, useRef } from "react";

const useOnClickOutside = (node, handler) => {
  const handlerRef = useRef(handler);
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (!node?.current) return;
      if (node?.current.contains(e.target)) return;
      if (handlerRef.current) {
        handlerRef.current();
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [node]);
};

export default useOnClickOutside;
