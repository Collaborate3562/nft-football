import React from "react";
import { SectionTitle } from "../../theme";
import { FAQWrapper, FAQItems } from "./FAQ.styles";
import FAQItem from "./FAQItem";
import { v4 as randomID } from "uuid";

const FAQ_DATA = [
  {
    question: "How many NFTs will be released to the public?",
    answer: "A total of 365 Football Punks.",
  },
  { question: "What is the minting price?", answer: "200 Matic (Polygon)." },
  {
    question: "Where can I get a Football Punk?",
    answer:
      "You can participate in the auction directly by minting on our website.",
  },
  {
    question: "When will I be able to see my Football Punk?",
    answer:
      "Once you have minted a Football Punk NFT, you will be able to see it by connecting your wallet to OpenSea.",
  },
  {
    question: "Will there be any giveaways?",
    answer: "Yes. You can check them out on our Discord/Twitter.",
  },
];

function FAQ() {
  const items = FAQ_DATA.map((item) => <FAQItem key={randomID()} {...item} />);
  return (
    <FAQWrapper id="faq">
      <SectionTitle>FAQ</SectionTitle>
      <FAQItems>{items}</FAQItems>
    </FAQWrapper>
  );
}

export default FAQ;
