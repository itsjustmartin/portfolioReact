import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React",
    description:
      " portfolio site is built with React and uses Chakra UI , It showcases the developer's projects, skills, and contact information in a clean and user-friendly way",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Django",
    description:
      "A blog site built with Django and API with REST is a web application that allows users to CRUD operations on blog posts using the Django web framework and a RESTful API. including features such as user authentication, user permissions .",
    getImageSrc: () => require("../images/django.jpg"),
  },
  {
    title: "python",
    description:
      "Python drone project aims to utilize computer vision techniques to enable a drone to detect and track objects autonomously.",
    getImageSrc: () => require("../images/drone.jpg"),
  },
  {
    title: "Chat Bot",
    description:
      "auto responding bot with Facebook Messnger API build with django backend, bot can fetch user info and reply according to user messages",
    getImageSrc: () => require("../images/messnger.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            // url="https://github.com/rgommezz/react-native-offline"
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;