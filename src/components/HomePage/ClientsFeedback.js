import { Box, Flex, Text, IconButton, Avatar, AvatarGroup, VStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const feedbacks = [
  {
    name: 'Jobaer Ahmed Joni',
    text:
      '“Going for Hajj has become much easier thanks to Business Automation—Alhamdulillah, we can now manage everything smoothly and easily.”',
    avatars: [
      'https://randomuser.me/api/portraits/men/32.jpg',
      'https://randomuser.me/api/portraits/men/33.jpg',
      'https://randomuser.me/api/portraits/men/34.jpg',
      'https://randomuser.me/api/portraits/men/35.jpg',
    ],
    activeIdx: 3,
  },
  // Add more feedback objects as needed
];

const ClientsFeedback = () => {
  const [current, setCurrent] = useState(0);
  const feedback = feedbacks[current];

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));

  return (
    <Box bg="white" py={{ base: 10, md: 20 }} px={{ base: 4, md: 0 }}>
      <VStack spacing={6} maxW="1100px" mx="auto" align="center">
        <Box fontSize="6xl" color="#1A32F3" fontWeight="bold" mb={-8}>
          &ldquo;
        </Box>
        <Text
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="bold"
          textAlign="center"
          color="gray.800"
          mb={2}
        >
          Check what these clients have to say
        </Text>
        <Flex align="center" w="full" justify="center" position="relative">
          <IconButton
            aria-label="Previous feedback"
            icon={<ChevronLeftIcon boxSize={8} />}
            onClick={handlePrev}
            size="lg"
            isRound
            bg="white"
            color="#1A32F3"
            boxShadow="0 0 0 4px #1A32F3"
            position="absolute"
            left={{ base: '-10', md: '-24' }}
            top="50%"
            transform="translateY(-50%)"
            _hover={{ bg: '#1A32F3', color: 'white' }}
          />
          <Box maxW="900px" mx="auto">
            <Text
              fontSize={{ base: 'lg', md: '2xl' }}
              color="gray.400"
              textAlign="center"
              fontWeight="medium"
              mb={6}
            >
              {feedback.text}
            </Text>
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              color="white"
              textAlign="center"
              fontWeight="bold"
              mb={4}
            >
              - {feedback.name}
            </Text>
            <Flex justify="center" mt={8}>
              <AvatarGroup size="xl" max={4}>
                {feedback.avatars.map((src, idx) => (
                  <Avatar
                    key={src}
                    src={src}
                    border={idx === feedback.activeIdx ? '3px solid #1A32F3' : '3px solid white'}
                    zIndex={idx === feedback.activeIdx ? 2 : 1}
                  />
                ))}
              </AvatarGroup>
            </Flex>
          </Box>
          <IconButton
            aria-label="Next feedback"
            icon={<ChevronRightIcon boxSize={8} />}
            onClick={handleNext}
            size="lg"
            isRound
            bg="white"
            color="#1A32F3"
            boxShadow="0 0 0 4px #1A32F3"
            position="absolute"
            right={{ base: '-10', md: '-24' }}
            top="50%"
            transform="translateY(-50%)"
            _hover={{ bg: '#1A32F3', color: 'white' }}
          />
        </Flex>
      </VStack>
    </Box>
  );
};

export default ClientsFeedback;
