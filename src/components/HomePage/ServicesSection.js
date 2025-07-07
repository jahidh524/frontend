import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Grid,
  GridItem,
  useColorModeValue,
  Circle,
  Icon,
  Card,
  CardBody,
  Flex
} from '@chakra-ui/react';
import { 
  Shield, 
  Cloud, 
  Building2, 
  Network, 
  Users,
  ArrowRight,
  Zap
} from 'lucide-react';

const ServicesSection = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.900', 'white');
  const iconBg = useColorModeValue('blue.50', 'blue.900');
  const iconColor = useColorModeValue('blue.600', 'blue.300');

  const services = [
    {
      icon: Shield,
      title: "AI-Driven Cybersecurity Solutions",
      description: "Accelerate your customer service management and develop cloud-native apps. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      color: "blue.500"
    },
    {
      icon: Cloud,
      title: "Cloud Migration Services",
      description: "Accelerate your customer service management and develop cloud-native apps. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      color: "blue.500"
    },
    {
      icon: Building2,
      title: "Fintech Solution Provider",
      description: "Accelerate your customer service management and develop cloud-native apps. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      color: "blue.500"
    },
    {
      icon: Network,
      title: "Digital Transformation Hub for SMEs",
      description: "Accelerate your customer service management and develop cloud-native apps. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      color: "blue.500"
    },
    {
      icon: Users,
      title: "eGovernment Solutions",
      description: "Accelerate your customer service management and develop cloud-native apps. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      color: "blue.500"
    },
    {
      icon: Zap,
      title: "Queue Management",
      description: "Accelerate your customer service management and develop cloud-native apps. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      color: "blue.500"
    }
  ];

  return (
    <Box bg={bgColor} py={20}>
      <Container maxW="7xl">
        {/* Header Section */}
        <VStack spacing={6} mb={16} textAlign="center">
          <Heading
            as="h2"
            size="2xl"
            color={headingColor}
            fontWeight="bold"
          >
            Our <Text as="span" color="blue.600">Services</Text>
          </Heading>
          <Text
            fontSize="lg"
            color={textColor}
            maxW="2xl"
            lineHeight="1.6"
          >
            Pleasure rationally encounter consequence that are painful. Nor again 
            in there anyone who purchase
          </Text>
        </VStack>

        {/* Services Grid */}
        <Grid 
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} 
          gap={8}
          mb={16}
        >
          {services.map((service, index) => (
            <GridItem key={index}>
              <Card
                bg={cardBg}
                shadow="lg"
                borderRadius="2xl"
                border="1px solid"
                borderColor="gray.100"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-8px)',
                  shadow: '2xl',
                  borderColor: 'blue.200'
                }}
                cursor="pointer"
                h="full"
              >
                <CardBody p={8}>
                  <VStack align="flex-start" spacing={6} h="full">
                    {/* Icon */}
                    <Box
                      bg={iconBg}
                      p={4}
                      borderRadius="xl"
                      transition="all 0.3s ease"
                      _hover={{
                        bg: 'blue.500',
                        transform: 'scale(1.05)'
                      }}
                      _groupHover={{
                        bg: 'blue.500'
                      }}
                    >
                      <Icon 
                        as={service.icon} 
                        w={8} 
                        h={8} 
                        color={iconColor}
                        transition="color 0.3s ease"
                        _hover={{
                          color: 'white'
                        }}
                      />
                    </Box>

                    {/* Content */}
                    <VStack align="flex-start" spacing={4} flex="1">
                      <Heading
                        as="h3"
                        size="lg"
                        color={headingColor}
                        fontWeight="bold"
                        lineHeight="1.3"
                      >
                        {service.title}
                      </Heading>
                      <Text
                        color={textColor}
                        fontSize="md"
                        lineHeight="1.6"
                        flex="1"
                      >
                        {service.description}
                      </Text>
                    </VStack>

                    {/* Arrow Button */}
                    <Flex justify="flex-end" w="full" mt="auto">
                      <Circle
                        size="48px"
                        bg="gray.100"
                        color="gray.600"
                        transition="all 0.3s ease"
                        _hover={{
                          bg: 'blue.600',
                          color: 'white',
                          transform: 'scale(1.1)'
                        }}
                        cursor="pointer"
                      >
                        <Icon as={ArrowRight} w={5} h={5} />
                      </Circle>
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
            size="lg"
            bg="white"
            color="gray.700"
            border="1px solid"
            borderColor="gray.200"
            px={8}
            py={6}
            borderRadius="full"
            shadow="md"
            _hover={{
              bg: 'blue.600',
              color: 'white',
              borderColor: 'blue.600',
              transform: 'translateY(-2px)',
              shadow: 'lg'
            }}
            _active={{
              transform: 'translateY(0)'
            }}
            transition="all 0.3s ease"
            rightIcon={
              <Circle
                size="32px"
                bg="blue.600"
                color="white"
                ml={4}
                transition="all 0.3s ease"
                _groupHover={{
                  bg: 'white',
                  color: 'blue.600'
                }}
              >
                <Icon as={ArrowRight} w={4} h={4} />
              </Circle>
            }
          >
            See more Service
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default ServicesSection;