import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Collapse,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigationItems = [
    { 
      name: 'Service', 
      hasDropdown: true,
      dropdownItems: ['Web Development', 'Mobile Apps', 'Consulting', 'Support']
    },
    { 
      name: 'Products', 
      hasDropdown: true,
      dropdownItems: ['Software Solutions', 'Enterprise Tools', 'Analytics', 'Integration']
    },
    { name: 'About Us', hasDropdown: false },
    { name: 'Our Culture', hasDropdown: false },
    { name: 'Careers', hasDropdown: false },
    { name: 'Blog', hasDropdown: false },
    { name: 'Contact', hasDropdown: false }
  ];

  const toggleMobileDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const hoverColor = useColorModeValue('blue.600', 'blue.400');

  return (
    <Box bg={bgColor} borderBottom="1px" borderColor={borderColor} shadow="sm">
      <Container maxW="7xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Box>
            <img src="/png/BA.png" alt="Company Logo" style={{ height: '40px' }} />
          </Box>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navigationItems.map((item, index) => (
              <Box key={index}>
                {item.hasDropdown ? (
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      variant="ghost"
                      color={textColor}
                      fontWeight="medium"
                      fontSize="sm"
                      _hover={{ color: hoverColor }}
                      _active={{ bg: 'gray.50' }}
                    >
                      {item.name}
                    </MenuButton>
                    <MenuList>
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <MenuItem
                          key={dropdownIndex}
                          _hover={{ color: hoverColor, bg: 'gray.50' }}
                          fontSize="sm"
                        >
                          {dropdownItem}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                ) : (
                  <Button
                    variant="ghost"
                    color={textColor}
                    fontWeight="medium"
                    fontSize="sm"
                    _hover={{ color: hoverColor }}
                  >
                    {item.name}
                  </Button>
                )}
              </Box>
            ))}
          </HStack>

          {/* Mobile menu button */}
          <IconButton
            size="md"
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={onOpen}
            variant="ghost"
            color={textColor}
            _hover={{ color: hoverColor }}
          />
        </Flex>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Flex
              bg="blue.600"
              color="white"
              px={3}
              py={2}
              borderRadius="md"
              fontWeight="bold"
              fontSize="sm"
              direction="column"
              alignItems="flex-start"
              w="fit-content"
            >
              <HStack spacing={1}>
                <Text fontSize="lg">✦</Text>
                <Text>business</Text>
              </HStack>
              <Text fontSize="xs" lineHeight="shorter">automation</Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={1} align="stretch">
              {navigationItems.map((item, index) => (
                <Box key={index}>
                  <Button
                    variant="ghost"
                    justifyContent="space-between"
                    rightIcon={item.hasDropdown ? <ChevronDownIcon /> : null}
                    w="full"
                    textAlign="left"
                    fontWeight="medium"
                    color={textColor}
                    _hover={{ color: hoverColor, bg: 'gray.50' }}
                    onClick={() => item.hasDropdown && toggleMobileDropdown(index)}
                  >
                    {item.name}
                  </Button>

                  {/* Mobile Dropdown */}
                  {item.hasDropdown && (
                    <Collapse in={activeDropdown === index} animateOpacity>
                      <VStack spacing={1} align="stretch" pl={4} mt={1}>
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <Button
                            key={dropdownIndex}
                            variant="ghost"
                            size="sm"
                            justifyContent="flex-start"
                            color="gray.600"
                            _hover={{ color: hoverColor, bg: 'gray.50' }}
                            w="full"
                          >
                            {dropdownItem}
                          </Button>
                        ))}
                      </VStack>
                    </Collapse>
                  )}
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;