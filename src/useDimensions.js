import { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";

/**
 * Captures height and width of ref. Uses resizeObserver
 * to capture changes in objects size, utilises lodash
 * debounce to reduce number of returns
 *
 * @returns [width, height]
 */
export const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  const debouncedFunction = useCallback(
    debounce((node) => {
      setDimensions({
        height: node[0]?.contentRect?.height,
        width: node[0]?.contentRect?.width,
      });
    }, 350),
    []
  );

  useEffect(() => {
    const copiedRef = ref;
    const resize = new ResizeObserver(debouncedFunction);
    if (copiedRef && "current" in copiedRef && copiedRef.current !== null) {
      resize.observe(copiedRef.current);
    }
    return () => {
      if (copiedRef && "current" in copiedRef && copiedRef.current !== null) {
        resize.unobserve(copiedRef?.current);
      }
    };
  }, [ref, debouncedFunction]);
  return [dimensions.width, dimensions.height];
};
