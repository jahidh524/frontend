import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Image,
  VStack,
  HStack,
  Badge,
  Card,
  CardBody,
  CardHeader,
  List,
  ListItem,
  ListIcon,
  Flex,
  Icon
} from '@chakra-ui/react';
import { ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons';

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "40% Faster Processing at Hajj Camp",
      description: "Implemented a comprehensive registration system that reduced processing time from 3 hours to 45 minutes, serving over 10,000 pilgrims daily.",
      results: [
        "40% reduction in processing time",
        "98% user satisfaction",
        "100% data accuracy",
        "Developed by 40% women engineers"
      ],
      category: "eGovernment",
      categoryColor: "blue"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "National Health Service Queue Optimization",
      description: "Transformed patient waiting experience across 25 hospitals with real-time queue management, reducing average wait times by 63%.",
      results: [
        "63% reduction in wait times",
        "35% increase in daily patient capacity",
        "89% positive patient feedback",
        "Mobile alerts reduced lobby congestion"
      ],
      category: "Queue Management",
      categoryColor: "blue"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Financial Services Workflow Automation",
      description: "Created an end-to-end loan processing system for a major bank, cutting processing time by 72% while ensuring compliance.",
      results: [
        "72% faster loan processing",
        "Zero compliance violations",
        "500,000+ loans processed",
        "99.99% system uptime"
      ],
      category: "Workflow Automation",
      categoryColor: "blue"
    }
  ];

  return (
    <Box bg="gray.50" py={20} minH="100vh">
      <Container maxW="7xl" px={8}>
        {/* Section Header */}
        <VStack spacing={6} textAlign="center" mb={16}>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            lineHeight="shorter"
          >
            <Text as="span" color="blue.600">Case</Text>{' '}
            <Text as="span" color="gray.800">Studies</Text>
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color="gray.600"
            maxW="3xl"
            lineHeight="relaxed"
          >
            Discover how our solutions have transformed organizations and delivered measurable results.
          </Text>
        </VStack>

        {/* Case Studies Grid */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={8}
          mb={12}
        >
          {caseStudies.map((study) => (
            <GridItem key={study.id}>
              <Card
                bg="white"
                borderRadius="2xl"
                overflow="hidden"
                shadow="lg"
                transition="all 0.3s"
                _hover={{
                  shadow: 'xl',
                  transform: 'translateY(-4px)'
                }}
                h="full"
              >
                {/* Card Image */}
                <Box position="relative" h="240px" overflow="hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    w="full"
                    h="full"
                    objectFit="cover"
                    transition="transform 0.3s"
                    _hover={{ transform: 'scale(1.05)' }}
                  />
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="blackAlpha.300"
                  />
                </Box>

                <CardBody p={6}>
                  <VStack spacing={4} align="stretch">
                    {/* Title */}
                    <Heading
                      as="h3"
                      fontSize="xl"
                      fontWeight="bold"
                      color="blue.700"
                      lineHeight="tight"
                    >
                      {study.title}
                    </Heading>

                    {/* Description */}
                    <Text
                      color="gray.600"
                      fontSize="sm"
                      lineHeight="relaxed"
                    >
                      {study.description}
                    </Text>

                    {/* Key Results */}
                    <Box>
                      <Text
                        fontSize="sm"
                        fontWeight="bold"
                        color="gray.800"
                        mb={3}
                      >
                        Key Results:
                      </Text>
                      <List spacing={2}>
                        {study.results.map((result, index) => (
                          <ListItem
                            key={index}
                            fontSize="sm"
                            color="gray.700"
                            display="flex"
                            alignItems="flex-start"
                          >
                            <ListIcon as={CheckIcon} color="green.500" mt={1} />
                            {result}
                          </ListItem>
                        ))}
                      </List>
                    </Box>

                    {/* Category and Arrow */}
                    <Flex justify="space-between" align="center" pt={4}>
                      <Badge
                        colorScheme={study.categoryColor}
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                        fontWeight="medium"
                      >
                        {study.category}
                      </Badge>
                      <Box
                        as="button"
                        w="10"
                        h="10"
                        borderRadius="full"
                        border="2px"
                        borderColor="blue.600"
                        color="blue.600"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transition="all 0.3s"
                        _hover={{
                          bg: 'blue.600',
                          color: 'white',
                          transform: 'rotate(45deg)'
                        }}
                      >
                        <ArrowForwardIcon />
                      </Box>
                    </Flex>
                  </VStack>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </Grid>

        {/* See More Button */}
        <Flex justify="center">
          <Button
            rightIcon={<ArrowForwardIcon />}
            bg="blue.600"
            color="white"
            size="lg"
            borderRadius="full"
            px={8}
            py={6}
            fontSize="md"
            fontWeight="medium"
            _hover={{
              bg: 'blue.700',
              transform: 'translateY(-2px)',
              shadow: 'lg'
            }}
            transition="all 0.3s"
          >
            See more Service
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}