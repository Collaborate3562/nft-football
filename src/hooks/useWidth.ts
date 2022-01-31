import { useEffect, useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => window.addEventListener('resize', () => setWidth(window.innerWidth)), []);

  return width;
};

export default useWidth;