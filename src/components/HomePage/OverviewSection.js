import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Grid,
  GridItem,
  useColorModeValue,
  Image,
  Badge,
  Circle,
  Stack
} from '@chakra-ui/react';

const HeroSection = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const headingColor = useColorModeValue('gray.900', 'white');
  
  const stats = [
    {
      number: '500+',
      label: 'Our Talents',
      color: 'red.400'
    },
    {
      number: '45%',
      label: 'Women in Tech Workforce',
      color: 'teal.400'
    },
    {
      number: '5M',
      label: 'Tickets Resolved',
      color: 'yellow.400'
    },
    {
      number: '2450+',
      label: 'Achieved Certification',
      color: 'blue.400'
    }
  ];

  const floatingStats = [
    {
      number: '25+',
      label: 'Years of Experience',
      position: { top: '20%', right: '15%' }
    },
    {
      number: '400+',
      label: 'Trusted Client',
      position: { top: '60%', right: '25%' }
    }
  ];

  return (
    <Box 
      position="relative"
      minH="100vh" 
      py={20}
      bg={bgColor}
    >
      {/* PNG Background Shade */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="url('path/to/your/shade.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        opacity="0.1" // Adjust opacity as needed (0.1 = 10% opacity)
        zIndex="1"
      />
      
      {/* Optional: Additional color overlay on top of PNG */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(59, 130, 246, 0.02)" // Very subtle blue tint
        zIndex="1"
      />

      <Container maxW="7xl" position="relative" zIndex="2">
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center">
          {/* Left Content */}
          <GridItem>
            <VStack align="flex-start" spacing={8}>
              <Box>
                <Heading
                  as="h1"
                  size="2xl"
                  color={headingColor}
                  lineHeight="1.2"
                  fontWeight="bold"
                  mb={6}
                >
                  Transforming Government with Trusted Technology
                </Heading>
                <Text
                  fontSize="lg"
                  color={textColor}
                  lineHeight="1.6"
                  borderLeft="4px solid"
                  borderColor="blue.400"
                  pl={4}
                >
                  Providing innovative technology solutions with a focus on inclusivity 
                  and excellence for over 25 years.
                </Text>
              </Box>

              {/* Statistics Grid */}
              <Grid templateColumns="repeat(2, 1fr)" gap={6} w="full">
                {stats.map((stat, index) => (
                  <GridItem key={index}>
                    <VStack align="flex-start" spacing={2}>
                      <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        color={stat.color}
                        lineHeight="1"
                      >
                        {stat.number}
                      </Text>
                      <Text fontSize="sm" color={textColor} fontWeight="medium">
                        {stat.label}
                      </Text>
                    </VStack>
                  </GridItem>
                ))}
              </Grid>

              {/* Action Buttons */}
              <HStack spacing={4} pt={4}>
                <Button
                  size="lg"
                  bg="blue.600"
                  color="white"
                  _hover={{ bg: 'blue.700' }}
                  _active={{ bg: 'blue.800' }}
                  px={8}
                  py={6}
                  borderRadius="full"
                >
                  Explore Solutions
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  color={textColor}
                  _hover={{ bg: 'gray.100' }}
                  px={8}
                  py={6}
                  borderRadius="full"
                >
                  Join Our Team
                </Button>
              </HStack>
            </VStack>
          </GridItem>

          {/* Right Content - Hero Image */}
          <GridItem>
            <Box position="relative" h="500px">
              {/* Main Image Container */}
              <Box
                position="relative"
                w="full"
                h="full"
                bg="linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #4a5568 100%)"
                borderRadius="3xl"
                overflow="hidden"
                boxShadow="2xl"
              >
                {/* AI Brain Visualization */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  w="200px"
                  h="200px"
                  bg="linear-gradient(135deg, #3182ce 0%, #2b6cb0 100%)"
                  borderRadius="full"
                  opacity="0.3"
                  filter="blur(40px)"
                />
                
                {/* AI Text Overlay */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  bg="rgba(255,255,255,0.1)"
                  backdropFilter="blur(10px)"
                  px={6}
                  py={3}
                  borderRadius="lg"
                  border="1px solid rgba(255,255,255,0.2)"
                >
                  <Text color="white" fontSize="2xl" fontWeight="bold">
                    AI
                  </Text>
                </Box>

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                  <Circle
                    key={i}
                    size="4px"
                    bg="blue.300"
                    position="absolute"
                    top={`${Math.random() * 80 + 10}%`}
                    left={`${Math.random() * 80 + 10}%`}
                    opacity="0.6"
                    animation={`float ${3 + Math.random() * 2}s ease-in-out infinite`}
                  />
                ))}

                {/* Tech Grid Pattern */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="full"
                  h="full"
                  opacity="0.1"
                  backgroundImage="radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)"
                  backgroundSize="20px 20px"
                />
              </Box>

              {/* Floating Statistics Cards */}
              {floatingStats.map((stat, index) => (
                <Box
                  key={index}
                  position="absolute"
                  {...stat.position}
                  bg="white"
                  p={4}
                  borderRadius="xl"
                  boxShadow="lg"
                  border="1px solid"
                  borderColor="gray.200"
                  minW="140px"
                >
                  <VStack spacing={1} align="flex-start">
                    <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                      {stat.number}
                    </Text>
                    <Text fontSize="sm" color="gray.600" fontWeight="medium">
                      {stat.label}
                    </Text>
                  </VStack>
                </Box>
              ))}

              {/* Carousel Dots */}
              <HStack spacing={2} position="absolute" bottom={6} left="50%" transform="translateX(-50%)">
                <Circle size="8px" bg="white" opacity="0.8" />
                <Circle size="8px" bg="white" opacity="0.4" />
              </HStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </Box>
  );
};

export default HeroSection;