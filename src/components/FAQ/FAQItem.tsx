import React, { useState } from "react";
import {
  FAQAnswer,
  FAQText,
  FAQHeader,
  FAQIcon,
  FAQItemWrapper,
  FAQTitle,
  AnimationWrapper
} from "./FAQItem.styles";
import { MdChevronLeft } from "react-icons/md";

interface IProps {
  question: string;
  answer: string;
}

function FAQItem({ answer, question }: IProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => setShowAnswer((prevState) => !prevState);

  return (
    <FAQItemWrapper>
      <AnimationWrapper>
        <FAQHeader onClick={toggleAnswer}>
          <FAQTitle>{question}</FAQTitle>
          <FAQIcon rotated={showAnswer}>
            <MdChevronLeft />
          </FAQIcon>
        </FAQHeader>
        <FAQAnswer show={showAnswer}>
          <FAQText>{answer}</FAQText>
        </FAQAnswer>
      </AnimationWrapper>
    </FAQItemWrapper>
  );
}

export default FAQItem;
