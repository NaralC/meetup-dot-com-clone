import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  Grid,
  Heading,
  Icon,
  Image,
  Input,
  Show,
} from "@chakra-ui/react";
import illustration from "../assets/illustration.svg";
import reactLogo from "../assets/react.svg";
import imageOne from "../assets/image-one.jpg";
import imageTwo from "../assets/image-two.jpg";
import imageThree from "../assets/image-three.jpg";
import { ArrowRightIcon, SearchIcon } from "@chakra-ui/icons";

const Banner: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <header>
        <Box
          display={"flex"}
          alignItems={"center"}
          px={3}
          justifyContent={"space-between"}
          // backgroundColor={"red"}
          width="100%"
        >
          <Center boxSize={"90px"}>
            <Image src={reactLogo} />
          </Center>
          <Box display={"flex"} gap={2} pr={5}>
            <Button
              variant="outline"
              color={"black"}
              boxShadow={"md"}
              _active={{ transform: "scale(0.95)" }}
            >
              Log In
            </Button>
            <Button
              variant="outline"
              color={"black"}
              boxShadow={"md"}
              _active={{ transform: "scale(0.95)" }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </header>

      {/* Landing hero */}
      <Box>
        <Container maxWidth={"container.xl"}>
          <Flex align={"center"} py={"20"} dir={"row"}>
            <Box mr={"6"}>
              <Heading as={"h1"} size={"2xl"}>
                <Box fontWeight={"black"}>
                  Dive in! There are so many things to do with Chakra UI!
                </Box>
              </Heading>
              <Box mt={"6"} fontWeight={"medium"}>
                Join a group to meet people, make friends, find support, grow a
                business, and explore your interests. Thousands of events are
                happening every day, both online and in person!
              </Box>
            </Box>
            <Box w={"100%"}>
              <Image w={"100%"} alt="illustration" src={illustration} />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* 3 boxes */}
      <Container maxW={"container.xl"} mt={"10"}>
        {/* This is like grid-cols-5 in Tailwind */}
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box>
            <Image w="100%" borderRadius={"lg"} src={imageOne} />
            <Button colorScheme="teal" variant={"link"} mt="5" gap={1}>
              Go touch grass
              <ArrowRightIcon boxSize={"3"} />
            </Button>
          </Box>
          <Box>
            <Image w="100%" borderRadius={"lg"} src={imageTwo} />
            <Button colorScheme="teal" variant={"link"} mt="5" gap={1}>
              Go touch grass
              <ArrowRightIcon boxSize={"3"} />
            </Button>
          </Box>
          <Box>
            <Image w="100%" borderRadius={"lg"} src={imageThree} />
            <Button colorScheme="teal" variant={"link"} mt="5" gap={1}>
              Go touch grass
              <ArrowRightIcon boxSize={"3"} />
            </Button>
          </Box>
        </Grid>
      </Container>

      {/* Pills */}
      <Container maxW={"container.xl"}>
        <Flex flexWrap={"wrap"} justify={"space-between"} my={"10"}>
          <Badge
            borderRadius={"3xl"}
            px={4}
            py={2}
            mr={"2"}
            mb={"4"}
            textTransform={"none"}
            color={"white"}
            bg={"teal.300"}
            _hover={{
              cursor: "pointer",
            }}
          >
            Boost your career
          </Badge>
          <Badge
            borderRadius={"3xl"}
            px={4}
            py={2}
            mr={"2"}
            mb={"4"}
            textTransform={"none"}
            color={"white"}
            bg={"teal.300"}
            _hover={{
              cursor: "pointer",
            }}
          >
            Boost your career
          </Badge>
          <Badge
            borderRadius={"3xl"}
            px={4}
            py={2}
            mr={"2"}
            mb={"4"}
            textTransform={"none"}
            color={"white"}
            bg={"teal.300"}
            _hover={{
              cursor: "pointer",
            }}
          >
            Boost your career
          </Badge>
          <Badge
            borderRadius={"3xl"}
            px={4}
            py={2}
            mr={"2"}
            mb={"4"}
            textTransform={"none"}
            color={"white"}
            bg={"teal.300"}
            _hover={{
              cursor: "pointer",
            }}
          >
            Boost your career
          </Badge>
          <Badge
            borderRadius={"3xl"}
            px={4}
            py={2}
            mr={"2"}
            mb={"4"}
            textTransform={"none"}
            color={"white"}
            bg={"teal.300"}
            _hover={{
              cursor: "pointer",
            }}
          >
            Boost your career
          </Badge>
        </Flex>
      </Container>

      {/* last header section */}
      <Container maxW={"container.xl"} mt={"20"}>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={"6"}>
          <Box>
            <Heading as={"h3"} size={"lg"} mb={"7"}></Heading>
            <Flex align={"center"} flexDir={"row"} w={"100%"}>
              <Box flexBasis={"50%"} w="100%" mr={"2"}>
                <FormControl>
                  <Box pos={"relative"}>
                    <Input
                      placeholder="Search for 'tennis'"
                      type="text"
                      w="100%"
                    ></Input>
                    <Box pos={"absolute"} top={"3"} right={"2"}>
                      <SearchIcon mb={"3"} hideBelow={"md"} />
                    </Box>
                  </Box>
                </FormControl>
              </Box>
              <Box flexBasis={"50%"} w="100%" mr={"2"}>
                <FormControl>
                  <Box pos={"relative"}>
                    <Input
                      placeholder="Search for 'tennis'"
                      type="text"
                      w="100%"
                    ></Input>
                    <Box pos={"absolute"} top={"3"} right={"2"}>
                      <SearchIcon mb={"3"} hideBelow={"md"} />
                    </Box>
                  </Box>
                </FormControl>
              </Box>
            </Flex>
            <Button
              _active={{ transform: "scale(0.95)" }}
              _hover={{ opacity: "80%" }}
              mt={"5"}
              px={"6"}
              w="100%"
              color={"white"}
              bg={"red.500"}
              fontSize={"lg"}
            >
              <Box fontWeight={"bold"}>Search</Box>
            </Button>
          </Box>

          <Box>
            <Heading as="h3" size="lg" mb="7">
              See what’s happening
            </Heading>
            <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
              <Badge
                borderRadius="3xl"
                px={5}
                py={2}
                mr="4"
                mb="4"
                color="#ffffff"
                bg="twitter.500"
              >
                Starting soon
              </Badge>
              <Badge
                borderRadius="3xl"
                px={5}
                py={2}
                mr="4"
                mb="4"
                color="#ffffff"
                bg="twitter.500"
              >
                Today
              </Badge>
              <Badge
                borderRadius="3xl"
                px={5}
                py={2}
                mr="4"
                mb="4"
                color="#ffffff"
                bg="twitter.500"
              >
                Tomorrow
              </Badge>
              <Badge
                borderRadius="3xl"
                px={5}
                py={2}
                mr="4"
                mb="4"
                color="#ffffff"
                bg="twitter.500"
              >
                This Week
              </Badge>
              <Badge
                borderRadius="3xl"
                px={5}
                py={2}
                mr="4"
                mb="4"
                color="#ffffff"
                bg="twitter.500"
              >
                Online
              </Badge>
              <Badge
                borderRadius="3xl"
                px={5}
                py={2}
                mr="4"
                mb="4"
                color="#ffffff"
                bg="twitter.500"
              >
                In person
              </Badge>
              <Badge
                borderRadius="3xl"
                px={5}
                py={2}
                mr="4"
                mb="4"
                color="#ffffff"
                bg="twitter.500"
              >
                Trending near you
              </Badge>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Banner;
