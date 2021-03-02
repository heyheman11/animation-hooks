/**
 * Captures height and width of window.
 *
 * @returns [width, height]
 */
export function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const captureWindow = useCallback(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => captureWindow);
    return () => window.removeEventListener("resize", () => captureWindow);
  }, [captureWindow]);
  return [dimensions.width, dimensions.height];
}
