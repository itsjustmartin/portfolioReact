import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

import avatarImage from "../images/avataricon.png"; // Import the avatar image
const greeting = "Hello, I am Martin Yacoub!";
const bio1 = " 💻 A software developer";
const bio2 = "👀 I am always looking to learn new technologies and keep up with industry trends.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size="xl" src={avatarImage}/>
    <VStack spacing={2} mt={4}>
      <Heading size="lg" color="white">{greeting}</Heading>
      <Heading size="md" color="white">{bio1}</Heading>
      <Heading size="md" color="white">{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
