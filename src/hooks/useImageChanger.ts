import { useEffect, useState } from "react";
import { PLAYERS_IMAGES } from "../images";

let imageIdx = 0;
let changeDelay = 500;

const useImageChanger = () => {
  const [image, setImage] = useState(PLAYERS_IMAGES[imageIdx]);

  useEffect(() => {
    const interval = setInterval(() => {
      imageIdx < PLAYERS_IMAGES.length - 1 ? imageIdx++ : (imageIdx = 0);
      setImage(PLAYERS_IMAGES[imageIdx]);
    }, changeDelay);

    return () => clearInterval(interval);
  }, []);

  return image;
}

export default useImageChanger;
