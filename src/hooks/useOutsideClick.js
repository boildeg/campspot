import { useEffect, useRef } from "react";

const useOutsideClick = (handler) => {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [handler]);

  // Re-enable the Escape key handler
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        handler();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handler]);

  return ref;
};

export default useOutsideClick;
