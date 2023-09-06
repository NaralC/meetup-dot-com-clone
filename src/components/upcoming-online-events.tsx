import { CalendarIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Heading,
  Link,
  Text,
  GridItem,
  Avatar,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const UpcomingOnlineEvents: React.FC = () => {
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <Flex mb={"7"} align={"center"} justify={"space-between"}>
          <Box>
            <Heading alignItems={"center"} as={"h3"} size={"lg"}>
              Upcoming Online Events
            </Heading>
          </Box>
          <Box>
            <Link fontWeight={"semibold"} color={"twitter.500"}>
              Explore More Events
            </Link>
          </Box>
        </Flex>
        <Grid
          templateColumns={{
            base: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          gap={"12"}
        >
          {Array(10)
            .fill(null)
            .map((_, idx) => (
              <GridItem key={idx}>
                <Box position={"relative"}>
                  <Box
                    position={"absolute"}
                    bg={"gray.500"}
                    p={1}
                    textColor={"white"}
                    top={"2"}
                    left={"2"}
                    rounded={"md"}
                  >
                    Online Event
                    <CalendarIcon mx={"5px"} />
                  </Box>
                </Box>
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  rounded={"2xl"}
                  boxShadow={"md"}
                />
                <Heading as={"h3"} size={"lg"}>
                  Placeholder Heading
                </Heading>
                <Text fontSize={"2xl"}>Lorem ipsum lorem ipsum</Text>
                <Wrap>
                  <WrapItem>
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                  </WrapItem>
                  <WrapItem>
                    <Avatar
                      name="Kola Tioluwani"
                      src="https://bit.ly/tioluwani-kolawole"
                    />
                  </WrapItem>
                  <WrapItem>
                    <Avatar
                      name="Kent Dodds"
                      src="https://bit.ly/kent-c-dodds"
                    />
                  </WrapItem>
                  <WrapItem>
                    <Avatar
                      name="Ryan Florence"
                      src="https://bit.ly/ryan-florence"
                    />
                  </WrapItem>
                  <WrapItem>
                    <Avatar
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                    />
                  </WrapItem>
                  <WrapItem>
                    <Avatar
                      name="Christian Nwamba"
                      src="https://bit.ly/code-beast"
                    />
                  </WrapItem>
                  <WrapItem>
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />
                  </WrapItem>
                </Wrap>
              </GridItem>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default UpcomingOnlineEvents;
