import React from "react";
import {
  ItemTitle,
  ItemContent,
  ItemWrapper,
  ItemDescription,
  ItemStage,
  AnimationWrapper,
} from "./RoadmapItem.styles";

interface IProps {
  title: string;
  description: string;
  stage: string;
}

function RoadmapItem({ title, description, stage }: IProps) {
  return (
    <ItemWrapper>
      <ItemContent>
        <AnimationWrapper top>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>{description}</ItemDescription>
          <ItemStage>{stage}</ItemStage>
        </AnimationWrapper>
      </ItemContent>
    </ItemWrapper>
  );
}

export default RoadmapItem;
