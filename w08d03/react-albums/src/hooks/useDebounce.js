import { useEffect } from "react";

export default function useDebounce(operation, ms) {
  useEffect(() => {
    const handle = setTimeout(operation, ms);
    return () => clearTimeout(handle);
  }, [operation, ms]);
}
