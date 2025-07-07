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
// import colors from "../../theme/colors";

const Footer = () => {
  const footerLinks = [
    { title: "Blog", href: "/blogs" },
    { title: "Videos", href: "/videos" },
    { title: "Brochures", href: "/brochures" },
    { title: "Case Studies", href: "/case-studies" },
  ];

  const policyLinks = [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Our Clients", href: "/our-clients" },
    { title: "Newsroom", href: "/newsroom" },
    { title: "Customer Stories", href: "/customer-story" },
    { title: "Our Partner", href: "/our-partners" },
  ];

  const solutionLinks = [
    { title: "Queue Management System", href: "/queue-management-system" },
    { title: "Self Service Solutions", href: "/self-service-solutions" },
    { title: "Self Service Kiosk", href: "/self-service-kiosk" },
    { title: "Digital Signage", href: "/digital-signage" },
    { title: "Feedback System", href: "/customer-feedback-system" },
    { title: "e-appointment System", href: "/e-appointment-system" },
  ];

  const socialIcons = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
    { icon: FaYoutube, href: "#" },
  ];

  return (
    <Box bg="black" color="white" py={10} px={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justify="space-between"
        maxW="1200px"
        mx="auto"
      >
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing={8}
          flexWrap="wrap"
        >
          {[footerLinks, policyLinks, solutionLinks].map((links, idx) => (
            <VStack
              key={idx}
              align="start"
              spacing={2}
              minW={{ base: "100%", md: "200px" }}
            >
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => console.log(`Navigating to: ${link.href}`)}
                >
                  {link.title}
                </Link>
              ))}            </VStack>
          ))}
        </Stack>

        {/* Contact Section */}
        <VStack align="start" spacing={2} mt={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">
            CONTACT US
          </Text>
          <Flex align="center" gap={2}>
            <Icon as={FaPhone} />
            <Link href="tel:+8809678771205" _hover={{ textDecoration: "none" }}>
              <Text>+8809678771205</Text>
            </Link>
          </Flex>
          <Flex align="center" gap={2}>
            <Icon as={FaEnvelope} />
            <Link
              href="mailto:sales@queue-pro.com"
              _hover={{ textDecoration: "none" }}
            >
              <Text>sales@queue-pro.com</Text>
            </Link>
          </Flex>
        </VStack>

        {/* Subscribe Section */}
        <VStack align="start" spacing={2} mt={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">
            Subscribe to get updates
          </Text>
          <Flex w="full" maxW="300px">
            <Input placeholder="Your Email" bg="white" color="black" flex={1} />
            {/* <Button
              bg={colors.button_color}
              color="white"
              _hover={{ bg: colors.main_color }}
            >
              <Icon as={FaPaperPlane} />
            </Button> */}
          </Flex>
          <Flex gap={3} mt={4}>
            {socialIcons.map((social, i) => (
              <Link key={i} href={social.href}>
                <Icon as={social.icon} boxSize={5} />
              </Link>
            ))}
          </Flex>
        </VStack>
      </Flex>
      <Text textAlign="center" mt={10} fontSize="sm">
        © 2023 Queue Pro, All Rights Reserved
      </Text>
    </Box >
  );
};

export default Footer;
