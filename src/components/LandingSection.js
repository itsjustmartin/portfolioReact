import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { Typewriter, Cursor } from 'react-simple-typewriter';



import avatarImage from "../images/avataricon.png";
const greeting = "Hello, I am Martin Yacoub!";
const bio1 = `a Software Developer 💻 `;
const bio2 = `my skills `;

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

function TypingComp() {
  return (
    <Typewriter
      words={[
        'great experience in Python and Django.',
        'Hand on Bootstrap React-js .',
        '👀 I am always looking to learn new technologies and keep up with industry trends !s',
      ]}
      cursor
      cursorStyle='|'
      loop={true}
      delaySpeed={1000}
      deleteSpeed={40}
      typeSpeed={100}
    >
      <Cursor></Cursor>
    </Typewriter>
  );
}
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size="xl" src={avatarImage} />
    <VStack spacing={2} mt={4}>
      <Heading size="lg" color="white">{greeting}</Heading>
      <Heading size="md" color="white">{bio1}</Heading>
      <Heading size="md" color="white"><TypingComp /></Heading>
    </VStack>
  </FullScreenSection>
);


export default LandingSection;
