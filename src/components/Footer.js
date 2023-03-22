import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import { useState , useEffect} from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.pageYOffset;
      if (scrollDistance > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Build with React By Martin • © {year}</p>
          {showButton && (
  <Button
    onClick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    position="fixed"
    bottom="20px"
    right="20px"
    borderRadius="50%"
    bg="blue.500"
    color="white"
    size="md"
    _hover={{ bg: "blue.600" }}
  >
    <FaArrowUp />
  </Button>
)}

        </Flex>
      </footer>
    </Box>
  );
};

export default Footer; 