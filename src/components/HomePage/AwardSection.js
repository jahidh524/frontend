import { Box, Flex, Text, VStack, SimpleGrid, Image } from "@chakra-ui/react";

const awards = [
  {
    title: "e-asia the Open Digital Govt. Award",
    img: "https://via.placeholder.com/400x300?text=Award+1",
  },
  {
    title: "IT Project BASIS SoftExpo",
    img: "https://via.placeholder.com/400x300?text=Award+2",
  },
  {
    title: "Bangladesh Computer Society",
    img: "https://via.placeholder.com/400x300?text=Award+3",
  },
];

const AwardSection = () => {
  return (
    <Box bg="transparent" py={{ base: 10, md: 20 }} px={{ base: 4, md: 0 }}>
      <VStack spacing={4} maxW="1200px" mx="auto" align="stretch">
        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          textAlign="center"
          color="#1A32F3"
        >
          Awards &{" "}
          <Text as="span" color="black" fontWeight="bold">
            Recognition
          </Text>
        </Text>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          textAlign="center"
          maxW="700px"
          mx="auto"
          color="gray.400"
        >
          Celebrating our commitment to excellence, our awards and recognitions
          reflect the trust, innovation, and impact we bring to every endeavor.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
          {awards.map((award, idx) => (
            <Box
              key={award.title}
              borderRadius="20px"
              overflow="hidden"
              boxShadow="lg"
              bg="gray.900"
              position="relative"
              minH="340px"
            >
              <Box position="relative" h="300px">
                <Image
                  src={award.img}
                  alt={award.title}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
                <Box
                  position="absolute"
                  left={0}
                  right={0}
                  bottom={0}
                  h="60%"
                  bgGradient="linear(to-t, #1A32F3cc 60%, transparent)"
                  zIndex={1}
                />
                <Text
                  position="absolute"
                  left={4}
                  bottom={4}
                  color="white"
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="medium"
                  zIndex={2}
                >
                  {award.title}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default AwardSection;
