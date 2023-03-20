import { HStack, VStack, Image, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack
      bg="#FFFFFF"
      borderRadius="md"
      boxShadow="md"
      p={4}
      spacing={4}
      _hover={{ boxShadow: "lg" }}
    >
      <Image src={imageSrc} borderRadius="md" boxSize="150px" objectFit="cover" />
      <VStack alignItems="flex-start" spacing={2} flex={1} color="#000000">
        <Heading as="h3" fontSize="xl">
          {title}
        </Heading>
        <Text fontSize="md">{description}</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </VStack>
    </HStack>
  );
};

export default Card;
