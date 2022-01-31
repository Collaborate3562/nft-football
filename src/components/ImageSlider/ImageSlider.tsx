import React, { useRef } from "react";
import { SliderContainer, SliderImage, SliderItem, SliderWrapper } from "./ImageSlider.styles";
import { v4 as randomID } from "uuid";
import { PLAYERS_IMAGES } from "../../images";

function ImageSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const nftCards = PLAYERS_IMAGES.map((image) => (
    <SliderItem key={randomID()}>
      <SliderImage src={image} alt="Player NFT" draggable={false} />
    </SliderItem>
  ));

  // Two copies are used to seamlessly reset the slider Y scroll to zero => infinite scroll
  return (
    <SliderWrapper ref={sliderRef}>
      <SliderContainer>
        {nftCards}{nftCards}
      </SliderContainer>
    </SliderWrapper>
  );
}

export default ImageSlider;
