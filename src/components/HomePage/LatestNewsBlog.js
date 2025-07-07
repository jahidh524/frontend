import { Box, Flex, Text, Image, VStack, HStack, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const news = [
  {
    type: 'News',
    title: 'BIDA Renews Service Agreement with Business Automation to....',
    img: 'https://via.placeholder.com/400x350?text=News+1',
    featured: true,
  },
  {
    type: 'Team Activity',
    title: "Celebrating a Newlywed Colleague's Birthday",
    description:
      'The aroma of vanilla and buttercream filled the office as we gathered around a magnificent birthday cake, a testament to our newlywed colleague\'s special day. It wasn\'t just a birthday; it was a team celebration, a joyous blend of professional camaraderie and',
    img: 'https://via.placeholder.com/200x120?text=News+2',
    featured: false,
  },
  {
    type: 'Team Activity',
    title: "Celebrating a Newlywed Colleague's Birthday",
    description:
      'The aroma of vanilla and buttercream filled the office as we gathered around a magnificent birthday cake, a testament to our newlywed colleague\'s special day. It wasn\'t just a birthday; it was a team celebration, a joyous blend of professional camaraderie and',
    img: 'https://via.placeholder.com/200x120?text=News+3',
    featured: false,
  },
];

const LatestNewsBlog = () => {
return (
    <Box bg="transparent" minH="100vh" py={{ base: 10, md: 24 }} px={{ base: 4, md: 0 }} position="relative">
        <Box
            position="absolute"
            left={0}
            top={0}
            w={{ base: '100%', md: '60%' }}
            h="100%"
            bgGradient="radial(circle at 10% 10%, #fff2 0%, transparent 80%)"
            zIndex={0}
        />
        <VStack spacing={8} maxW="1100px" mx="auto" align="flex-start" position="relative" zIndex={1}>
            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" textAlign="left" w="full">
                <Box as="span" color="#1A32F3">latest</Box>{' '}
                <Box as="span" color="gray.700">news & blog</Box>
            </Text>
            <Flex w="full" gap={8} flexDir={{ base: 'column', md: 'row' }} align="flex-start">
                {/* Left featured news */}
                <Box
                    flex={1.2}
                    bg="gray.900"
                    borderRadius="18px"
                    overflow="hidden"
                    boxShadow="lg"
                    minH="420px"
                    position="relative"
                    display="flex"
                    flexDir="column"
                    justifyContent="flex-end"
                    border="2px solid"
                    borderColor="gray.200"
                >
                    <Image src={news[0].img} alt={news[0].title} w="100%" h="100%" objectFit="cover" minH="320px" />
                    <Box
                        position="absolute"
                        left={0}
                        right={0}
                        bottom={0}
                        h="60%"
                        bgGradient="linear(to-t, #1A32F3cc 30%, transparent)"
                        zIndex={1}
                    />
                    <VStack align="flex-start" spacing={2} position="absolute" left={4} bottom={4} zIndex={2}>
                        <HStack>
                            <Text color="whiteAlpha.800" fontSize="sm">{news[0].type}</Text>
                        </HStack>
                        <Text color="white" fontWeight="medium" fontSize={{ base: 'md', md: 'lg' }} maxW="90%">
                            {news[0].title}
                        </Text>
                    </VStack>
                </Box>
                {/* Right side description, no grid or border */}
                <Box flex={1} display="flex" flexDirection="column" gap={6}>
                    {news.slice(1).map((item, idx) => (
                        <Flex
                            key={item.title + idx}
                            align="flex-start"
                            gap={4}
                            border="2px solid"
                            borderColor="gray.200"
                            borderRadius="10px"
                            p={3}
                            bg="white"
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                w="120px"
                                h="200px"
                                objectFit="cover"
                                borderRadius="10px"
                                flexShrink={0}
                            />
                            <VStack align="flex-start" spacing={1} flex={1}>
                                <Text color="gray.400" fontSize="xs">{item.type}</Text>
                                <Text color="white" fontWeight="medium" fontSize="md" noOfLines={1}>
                                    {item.title}
                                </Text>
                                <Text color="gray.400" fontSize="sm" noOfLines={2}>
                                    {item.description}
                                </Text>
                            </VStack>
                        </Flex>
                    ))}
                </Box>
            </Flex>
            <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="whiteAlpha"
                variant="solid"
                bg="white"
                color="#1A32F3"
                borderRadius="full"
                px={8}
                py={6}
                fontWeight="bold"
                border={'2px solid #ADB1E6'}
                fontSize="md"
                mt={4}
                textColor={'#000000'}
                _hover={{ bg: '#1A32F3', color: 'white' }}
            >
                See more
            </Button>
        </VStack>
    </Box>
);
};

export default LatestNewsBlog;
