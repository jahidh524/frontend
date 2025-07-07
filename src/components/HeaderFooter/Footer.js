import {
  Box,
  Flex,
  Link,
  Text,
  Input,
  Button,
  Icon,
  VStack,
  Stack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const companyLinks = [
    { title: "About Us", href: "/about" },
    { title: "Leadership", href: "/leadership" },
    { title: "Awards", href: "/awards" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { title: "eGovernment", href: "/egovernment" },
    { title: "Banking Solutions", href: "/banking" },
    { title: "Enterprise Software", href: "/enterprise" },
    { title: "IT Consulting", href: "/consulting" },
    { title: "System Integration", href: "/integration" },
  ];

  const productLinks = [
    { title: "QueuePro", href: "/queuepro" },
    { title: "OSSP", href: "/ossp" },
    { title: "EBS", href: "/ebs" },
    { title: "CRM", href: "/crm" },
    { title: "Insight DB", href: "/insight-db" },
    { title: "Visitor System", href: "/visitor-system" },
  ];

  const resourceLinks = [
    { title: "Case Studies", href: "/case-studies" },
    { title: "Whitepapers", href: "/whitepapers" },
    { title: "Blog", href: "/blog" },
    { title: "FAQS", href: "/faqs" },
    { title: "Partners & Donors", href: "/partners" },
    { title: "Support", href: "/support" },
  ];

  const footerBottomLinks = [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Accessibility", href: "/accessibility" },
  ];

  const socialIcons = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
    { icon: FaYoutube, href: "#" },
  ];

  return (
    <Box bg="#1a237e" color="white" py={12} px={6}>
      <Box maxW="1200px" mx="auto">
        {/* Main Footer Content */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          gap={8}
          mb={8}
        >
          {/* Company Description */}
          <Box maxW={{ base: "100%", lg: "300px" }} mb={{ base: 6, lg: 0 }}>
            <Flex align="center" mb={4}>
              <Icon viewBox="0 0 24 24" boxSize={8} mr={2}>
                <path
                  fill="currentColor"
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                />
              </Icon>
              <Text fontSize="xl" fontWeight="bold">
                business automation
              </Text>
            </Flex>
            <Text fontSize="sm" lineHeight="1.6" opacity={0.9}>
              Bangladesh's most trusted e-Government and enterprise technology partner. 
              Delivering innovative solutions that drive digital transformation and inclusive growth.
            </Text>
            
            {/* Newsletter Subscription */}
            <Box mt={6}>
              <HStack spacing={0} maxW="320px">
                <Input
                  placeholder="Email address"
                  bg="white"
                  color="black"
                  border="none"
                  borderRadius="25px 0 0 25px"
                  px={4}
                  py={2}
                  fontSize="sm"
                  _placeholder={{ color: "gray.500" }}
                />
                <Button
                  bg="#ff5722"
                  color="white"
                  borderRadius="0 25px 25px 0"
                  px={6}
                  py={2}
                  fontSize="sm"
                  _hover={{ bg: "#e64a19" }}
                >
                  Subscribe
                </Button>
              </HStack>
            </Box>
          </Box>

          {/* Footer Links Grid */}
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            spacing={8}
            flex={1}
            maxW={{ base: "100%", lg: "800px" }}
          >
            {/* Company */}
            <VStack align="start" spacing={3}>
              <Text fontSize="lg" fontWeight="bold" mb={1}>
                Company
              </Text>
              {companyLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  fontSize="sm"
                  opacity={0.8}
                  _hover={{ opacity: 1, textDecoration: "none" }}
                  onClick={() => console.log(`Navigating to: ${link.href}`)}
                >
                  {link.title}
                </Link>
              ))}
            </VStack>

            {/* Services */}
            <VStack align="start" spacing={3}>
              <Text fontSize="lg" fontWeight="bold" mb={1}>
                Services
              </Text>
              {serviceLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  fontSize="sm"
                  opacity={0.8}
                  _hover={{ opacity: 1, textDecoration: "none" }}
                  onClick={() => console.log(`Navigating to: ${link.href}`)}
                >
                  {link.title}
                </Link>
              ))}
            </VStack>

            {/* Products */}
            <VStack align="start" spacing={3}>
              <Text fontSize="lg" fontWeight="bold" mb={1}>
                Products
              </Text>
              {productLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  fontSize="sm"
                  opacity={0.8}
                  _hover={{ opacity: 1, textDecoration: "none" }}
                  onClick={() => console.log(`Navigating to: ${link.href}`)}
                >
                  {link.title}
                </Link>
                
              ))}
            </VStack>

            {/* Resources */}
            <VStack align="start" spacing={3}>
              <Text fontSize="lg" fontWeight="bold" mb={1}>
                Resources
              </Text>
              {resourceLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  fontSize="sm"
                  opacity={0.8}
                  _hover={{ opacity: 1, textDecoration: "none" }}
                  onClick={() => console.log(`Navigating to: ${link.href}`)}
                >
                  {link.title}
                </Link>
              ))}
            </VStack>
          </SimpleGrid>
        </Flex>

        {/* Footer Bottom */}
        <Box
          borderTop="1px solid rgba(255,255,255,0.1)"
          pt={6}
          mt={8}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <Text fontSize="sm" opacity={0.8}>
              © 2025 Business Automation Ltd. All rights reserved.
            </Text>
            
            <HStack spacing={6}>
              {footerBottomLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  fontSize="sm"
                  opacity={0.8}
                  _hover={{ opacity: 1, textDecoration: "none" }}
                  onClick={() => console.log(`Navigating to: ${link.href}`)}
                >
                  {link.title}
                </Link>
              ))}
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;