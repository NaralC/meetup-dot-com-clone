import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

const ItWorks: React.FC = () => {
  return (
    <Box textAlign={"center"}>
      <Container maxWidth={"container.xl"} my={"20"}>
        <Heading alignContent={"center"} as={"h3"} size={"lg"} pb={"2"}>
          How Chakra UI Works
        </Heading>
        <Box alignContent={"center"} maxW={"700px"} mx={"auto"} pb={"10"}>
          Meet new people who share your interests through events.
        </Box>

        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
        >
          <Box mx="auto" alignContent={"center"}>
            <Image
              w="100%"
              boxSize={"160px"}
              src={
                "https://secure.meetupstatic.com/next/images/shared/handsUp.svg?w=384"
              }
            />
            <Heading as="h5" size={"md"}>
              <Link>
                <Box color={"blue.500"} pb={"4"}>
                  Join a Group
                </Box>
                <Text fontSize="sm">In love with React & Next</Text>
              </Link>
            </Heading>
          </Box>
          <Box mx="auto" alignContent={"center"}>
            <Image
              w="100%"
              boxSize={"160px"}
              src={
                "https://secure.meetupstatic.com/next/images/shared/ticket.svg?w=384"
              }
            />
            <Heading as="h5" size={"md"}>
              <Link>
                <Box color={"blue.500"} pb={"4"}>
                  Join a Group
                </Box>
                <Text fontSize="sm">In love with React & Next</Text>
              </Link>
            </Heading>
          </Box>
          <Box mx="auto" alignContent={"center"}>
            <Image
              w="100%"
              boxSize={"160px"}
              src={
                "https://secure.meetupstatic.com/next/images/shared/joinGroup.svg?w=256"
              }
            />
            <Heading as="h5" size={"md"}>
              <Link>
                <Box color={"blue.500"} pb={"4"}>
                  Join a Group
                </Box>
                <Text fontSize="sm">In love with React & Next</Text>
              </Link>
            </Heading>
          </Box>
        </Grid>

        <Button
          _active={{ transform: "scale(0.95)" }}
          _hover={{ opacity: "80%" }}
          mt={"5"}
          px={"6"}
          color={"white"}
          bg={"twitter.500"}
          fontSize={"lg"}
          filter='saturate(120%)'
        >
          <Box fontWeight={"bold"}>Search</Box>
        </Button>
      </Container>
    </Box>
  );
};

export default ItWorks;
