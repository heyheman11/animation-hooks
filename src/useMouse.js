import { useEffect, useState, useCallback } from "react";

/**
 * Captures mouse corrdinates of a given element
 *
 * @returns object of x and y coordinates
 */
export const useMouse = (ref) => {
    const [coord, setCoord] = useState({ x: 0, y: 0 });
  
    const mouseMoveCallback = useCallback((event) => {
      setCoord({ x: event.clientX, y: event.clientY });
    }, []);
  
    useEffect(() => {
      const copiedRef = ref;
      if (copiedRef && "current" in copiedRef && copiedRef.current !== null) {
        copiedRef.current.addEventListener("mousemove", mouseMoveCallback);
      }
      return () => {
        if (copiedRef && "current" in copiedRef && copiedRef.current !== null) {
          copiedRef.current.removeEventListener("mousemove", mouseMoveCallback);
        }
      };
    }, [ref, mouseMoveCallback]);
    return coord;
  };