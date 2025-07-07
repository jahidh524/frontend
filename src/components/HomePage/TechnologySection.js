import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const techData = [
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent systems that continuously learn and adapt over time to optimize business processes, improve operational efficiency, and support smarter, data-driven decision-making across the organization",
  },
  {
    title: "Big Data Analytics",
    description:
      "Turn raw data into meaningful, actionable insights with our powerful and advanced analytics frameworks—helping you make informed decisions and drive better outcomes.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Our scalable and secure cloud solutions are expertly engineered to deliver enterprise-level performance, reliability, and flexibility—empowering your business to grow and adapt with confidence.",
  },
  {
    title: "Microservices",
    description:
      "Our modular architecture allows for fast, flexible development and deployment of business applications, ensuring quicker time-to-market and easy scalability as your needs evolve.",
  },
  {
    title: "Blockchain",
    description:
      "Distributed ledger technology ensures enhanced security, transparency, and trust for managing and sharing critical data across multiple stakeholders.",
  },
];

const TechnologySection = () => {
  return (
    <Box
      bgGradient="radial(circle at 20% 20%, #181F4B 60%, #0B0E23 100%)"
      py={{ base: 10, md: 20 }}
      px={{ base: 4, md: 0 }}
      minH="100vh"
      color="white"
    >
      <VStack spacing={4} maxW="1100px" mx="auto" align="stretch">
        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          textAlign="center"
        >
          Technology and Innovation
        </Text>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          textAlign="center"
          maxW="700px"
          mx="auto"
          opacity={0.85}
        >
          Driving progress through cutting-edge solutions, Technology and
          Innovation empower smarter systems
        </Text>
        <Box mt={8}>
          {techData.map((item, idx) => (
            <Box key={item.title}>
              <Flex align="center" py={6}>
                <Box flex={{ base: 1, md: 2 }}>
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
                    {item.title}
                  </Text>
                </Box>
                <Box flex={{ base: 3, md: 6 }}>
                  <Text fontSize={{ base: "sm", md: "md" }} opacity={0.9}>
                    {item.description}
                  </Text>
                </Box>
                <HStack
                  flex={{ base: 0, md: 1 }}
                  justify="flex-end"
                  minW="40px"
                >
                  <IconButton
                    aria-label="Learn more"
                    icon={<ArrowForwardIcon />}
                    variant="ghost"
                    colorScheme="whiteAlpha"
                    size="lg"
                    isRound
                  />
                </HStack>
              </Flex>
              {idx < techData.length - 1 && (
                <Divider borderColor="whiteAlpha.300" />
              )}
            </Box>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default TechnologySection;
