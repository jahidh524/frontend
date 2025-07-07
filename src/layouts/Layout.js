import { Box, Flex } from "@chakra-ui/react";
import Footer from "../components/HeaderFooter/Footer";
import Header from "../components/HeaderFooter/Header";

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" pt="50px">{children}</Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
