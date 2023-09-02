import { Box, Button, Center, Container } from "@chakra-ui/react";
import { SiChakraui } from "react-icons/si";

const Banner: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <header>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          // backgroundColor={"red"}
          width="100%"
        >
          <Center boxSize={"90px"}>
            <SiChakraui />
          </Center>
          <Box display={"flex"} gap={2} pr={5}>
            <Button variant="link" colorScheme="blue">
              Log In
            </Button>
            <Button variant="link" colorScheme="blue">
              Sign Up
            </Button>
          </Box>
        </Box>
      </header>

      {/* Landing hero */}
      <Box>
        <Container maxWidth={"container.xl"}>
          <Box display={"flex"} alignItems={"center"} py={"20"} flexDir={"row"}></Box>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
