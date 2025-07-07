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
  Flex,
  SimpleGrid
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function ClientsPartnersSection() {
  const clients = [
    {
      id: 1,
      name: "Ministry of Religious Affairs",
      subtitle: "Government Of The People's Republic Of Bangladesh",
      logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "green.600"
    },
    {
      id: 2,
      name: "Bangladesh Investment Development Authority",
      subtitle: "BIDA",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "red.600"
    },
    {
      id: 3,
      name: "National Housing Authority",
      subtitle: "Ministry Of Housing And Public Works",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "green.600"
    },
    {
      id: 4,
      name: "Bangladesh Hi-Tech Park Authority",
      subtitle: "BHTPA",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "pink.500"
    },
    {
      id: 5,
      name: "Bangladesh Express Board",
      subtitle: "Transport Authority",
      logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "green.600"
    },
    {
      id: 6,
      name: "Bangladesh Hi-Tech Park Authority",
      subtitle: "BHTPA",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "pink.500"
    },
    {
      id: 7,
      name: "Bangladesh Standards and Testing Institution",
      subtitle: "Ministry Of Industries",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "purple.600"
    },
    {
      id: 8,
      name: "Land Ministry",
      subtitle: "Government Of The People's Republic Of Bangladesh",
      logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "green.600"
    },
    {
      id: 9,
      name: "Public Administration Ministry",
      subtitle: "Government Authority",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "green.600"
    },
    {
      id: 10,
      name: "Security Services Division",
      subtitle: "Ministry Of Home Affairs",
      logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "green.600"
    },
    {
      id: 11,
      name: "Ministry of Religious Affairs",
      subtitle: "Government Of The People's Republic Of Bangladesh",
      logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "green.600"
    },
    {
      id: 12,
      name: "Rajdhani Unnayan Kartripakkha",
      subtitle: "Ministry Of Housing & Public Works",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "blue.600"
    },
    {
      id: 13,
      name: "Sonali Bank PLC",
      subtitle: "Private Banking Institution",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "yellow.600"
    }
  ];

  return (
    <Box bg="gray.50" py={20}>
      <Container maxW="7xl" px={8}>
        {/* Section Header */}
        <VStack spacing={6} textAlign="center" mb={16}>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            lineHeight="shorter"
          >
            <Text as="span" color="blue.600">Our Client</Text>{' '}
            <Text as="span" color="gray.800">& Partner</Text>
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color="gray.600"
            maxW="3xl"
            lineHeight="relaxed"
          >
            Trusted by leading organizations across government and private sectors
          </Text>
        </VStack>

        {/* Clients Grid */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          spacing={8}
          mb={12}
        >
          {clients.map((client) => (
            <Box
              key={client.id}
              bg="white"
              borderRadius="xl"
              p={6}
              shadow="sm"
              transition="all 0.3s"
              _hover={{
                shadow: 'md',
                transform: 'translateY(-4px)',
                borderColor: client.color
              }}
              border="2px"
              borderColor="transparent"
              cursor="pointer"
              h="full"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              {/* Logo Circle */}
              <Box
                w="60px"
                h="60px"
                borderRadius="full"
                bg={client.color}
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={4}
                position="relative"
                overflow="hidden"
              >
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  bg="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box
                    w="30px"
                    h="30px"
                    borderRadius="full"
                    bg={client.color}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text color="white" fontSize="xs" fontWeight="bold">
                      {client.name.charAt(0)}
                    </Text>
                  </Box>
                </Box>
              </Box>

              {/* Client Name */}
              <Text
                fontSize="sm"
                fontWeight="bold"
                color={client.color}
                mb={2}
                lineHeight="tight"
              >
                {client.name}
              </Text>

              {/* Subtitle */}
              <Text
                fontSize="xs"
                color="gray.600"
                lineHeight="relaxed"
              >
                {client.subtitle}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* See More Button */}
        <Flex justify="center">
          <HStack spacing={0}>
            <Button
              bg="white"
              color="gray.700"
              size="lg"
              borderRadius="full"
              borderRightRadius="0"
              px={8}
              py={6}
              fontSize="md"
              fontWeight="medium"
              border="2px"
              borderColor="gray.200"
              _hover={{
                bg: 'gray.50'
              }}
            >
              See more
            </Button>
            <Button
              bg="blue.600"
              color="white"
              size="lg"
              borderRadius="full"
              borderLeftRadius="0"
              px={4}
              py={6}
              border="2px"
              borderColor="blue.600"
              _hover={{
                bg: 'blue.700'
              }}
            >
              <ArrowForwardIcon />
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}