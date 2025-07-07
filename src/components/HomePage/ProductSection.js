import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  VStack,
  IconButton,
  Badge
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export default function OurProduct() {
  return (
    <Box bg="gray.50" py={20} minH="100vh">
      <Container maxW="7xl" px={8}>
        {/* Section Header */}
        <VStack spacing={6} textAlign="center" mb={16}>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            color="blue.600"
            lineHeight="shorter"
          >
            Our Product
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color="gray.600"
            maxW="4xl"
            lineHeight="relaxed"
          >
            Innovative, user-centric, and scalable — our products are designed to streamline operations, enhance customer experiences, and drive digital transformation across industries.
          </Text>
        </VStack>

        {/* Product Showcase */}
        <Box position="relative">
          {/* Main Product Card */}
          <Box
            bg="linear-gradient(135deg, #E6EFFF 0%, #C8D5FF 100%)"
            borderRadius="3xl"
            p={{ base: 8, md: 12, lg: 16 }}
            position="relative"
            overflow="hidden"
            minH="500px"
          >
            <Grid
              templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
              gap={{ base: 8, lg: 16 }}
              alignItems="center"
              h="full"
            >
              {/* Left Content */}
              <GridItem>
                <VStack spacing={8} align="flex-start" h="full" justify="center">
                  {/* Logo */}
                  <Box>
                    <VStack spacing={2} align="flex-start">
                      <Box
                        w="80px"
                        h="80px"
                        bg="linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                      >
                        <Text
                          color="white"
                          fontWeight="bold"
                          fontSize="xs"
                          textAlign="center"
                          lineHeight="1.2"
                        >
                          QUEUE
                          <br />
                          PRO
                        </Text>
                        <Box
                          position="absolute"
                          bottom="-8px"
                          bg="white"
                          px={2}
                          py={1}
                          borderRadius="md"
                          fontSize="xs"
                          fontWeight="bold"
                          color="gray.700"
                        >
                          Priority Assured
                        </Box>
                      </Box>
                    </VStack>
                  </Box>

                  {/* Product Title */}
                  <Heading
                    as="h3"
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    fontWeight="bold"
                    color="blue.800"
                    lineHeight="tight"
                  >
                    Queue Pro
                  </Heading>

                  {/* Description */}
                  <Text
                    color="gray.700"
                    fontSize={{ base: 'md', md: 'lg' }}
                    lineHeight="relaxed"
                    maxW="500px"
                  >
                    Improve your customer experience with shorter wait times and fewer human interactions. From self-serve kiosks to digital signage, we have you covered. Get connected with the leading kiosk manufacturer in Bangladesh, offering a complete self-service and queue management solution to any establishment.
                  </Text>

                  {/* View Details Button */}
                  <Button
                    bg="white"
                    color="gray.800"
                    fontWeight="medium"
                    px={8}
                    py={6}
                    borderRadius="full"
                    border="1px"
                    borderColor="gray.300"
                    fontSize="lg"
                    _hover={{
                      bg: 'gray.50',
                      shadow: 'lg',
                      transform: 'translateY(-2px)'
                    }}
                    transition="all 0.3s"
                  >
                    View Details
                  </Button>
                </VStack>
              </GridItem>

              {/* Right Content - Product Image */}
              <GridItem>
                <Box
                  position="relative"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  h="full"
                >
                  {/* Kiosk Machine */}
                  <Box
                    bg="white"
                    borderRadius="xl"
                    p={6}
                    shadow="xl"
                    transform="rotate(-5deg)"
                    position="relative"
                    w="300px"
                    h="400px"
                  >
                    {/* Screen */}
                    <Box
                      bg="blue.500"
                      borderRadius="lg"
                      h="120px"
                      mb={4}
                      position="relative"
                      overflow="hidden"
                    >
                      <Box
                        position="absolute"
                        top="2"
                        left="2"
                        right="2"
                        bottom="2"
                        bg="blue.600"
                        borderRadius="md"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text color="white" fontSize="xs">Windows Interface</Text>
                      </Box>
                    </Box>

                    {/* Ticket Dispenser */}
                    <Box
                      bg="orange.400"
                      borderRadius="md"
                      p={3}
                      mb={4}
                      position="relative"
                    >
                      <Text color="white" fontSize="xs" fontWeight="bold">
                        42BA66
                      </Text>
                      <Text color="white" fontSize="xs">
                        Token Number
                      </Text>
                    </Box>

                    {/* Ticket Sample */}
                    <Box
                      bg="white"
                      border="2px dashed"
                      borderColor="gray.300"
                      borderRadius="md"
                      p={2}
                      mb={4}
                      fontSize="xs"
                    >
                      <Text fontWeight="bold" mb={1}>42BA66</Text>
                      <Text color="gray.600">Your Ticket Number is</Text>
                      <Box mt={2} borderTop="1px dashed" borderColor="gray.300" pt={1}>
                        <Text fontSize="xs" color="gray.500">
                          ||||  ||||  ||||  ||||
                        </Text>
                      </Box>
                    </Box>

                    {/* Bottom Interface */}
                    <Box
                      bg="gray.100"
                      borderRadius="md"
                      p={2}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box w="8px" h="8px" bg="red.400" borderRadius="full" />
                      <Box w="8px" h="8px" bg="red.400" borderRadius="full" />
                      <Box w="8px" h="8px" bg="red.400" borderRadius="full" />
                      <Box w="8px" h="8px" bg="red.400" borderRadius="full" />
                    </Box>
                  </Box>

                  {/* Made in Bangladesh Badge */}
                  <Badge
                    position="absolute"
                    top="4"
                    right="4"
                    bg="orange.400"
                    color="white"
                    px={3}
                    py={2}
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight="bold"
                    transform="rotate(5deg)"
                  >
                    MADE IN
                    <br />
                    BANGLADESH
                  </Badge>

                  {/* Circular Design Element */}
                  <Box
                    position="absolute"
                    bottom="-10"
                    right="-10"
                    w="200px"
                    h="200px"
                    borderRadius="full"
                    border="8px solid"
                    borderColor="orange.400"
                    borderTop="transparent"
                    borderLeft="transparent"
                    opacity={0.7}
                  />
                </Box>
              </GridItem>
            </Grid>

            {/* Background Decorative Elements */}
            <Box
              position="absolute"
              top="8"
              right="8"
              w="24"
              h="24"
              bg="whiteAlpha.200"
              borderRadius="full"
              filter="blur(20px)"
            />
            <Box
              position="absolute"
              bottom="8"
              left="8"
              w="32"
              h="32"
              bg="whiteAlpha.100"
              borderRadius="full"
              filter="blur(30px)"
            />
          </Box>

          {/* Navigation Arrows */}
          <IconButton
            aria-label="Previous product"
            icon={<ChevronLeftIcon boxSize={6} />}
            position="absolute"
            left="-6"
            top="50%"
            transform="translateY(-50%)"
            w="12"
            h="12"
            bg="white"
            border="2px"
            borderColor="gray.200"
            borderRadius="full"
            shadow="lg"
            _hover={{
              bg: 'gray.50',
              borderColor: 'blue.300',
              transform: 'translateY(-50%) scale(1.1)'
            }}
            transition="all 0.3s"
          />

          <IconButton
            aria-label="Next product"
            icon={<ChevronRightIcon boxSize={6} />}
            position="absolute"
            right="-6"
            top="50%"
            transform="translateY(-50%)"
            w="12"
            h="12"
            bg="white"
            border="2px"
            borderColor="gray.200"
            borderRadius="full"
            shadow="lg"
            _hover={{
              bg: 'gray.50',
              borderColor: 'blue.300',
              transform: 'translateY(-50%) scale(1.1)'
            }}
            transition="all 0.3s"
          />
        </Box>
      </Container>
    </Box>
  );
}
