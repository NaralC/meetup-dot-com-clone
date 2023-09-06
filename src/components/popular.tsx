import {
  Box,
  Container,
  Grid,
  Image,
  Heading,
  Text,
  GridItem,
  Card,
  Divider,
  CardBody,
} from "@chakra-ui/react";

const Popular: React.FC = () => {
  return (
    <Box mt={20}>
      <Container maxW={"container.xl"}>
        <Heading alignContent={"center"} as={"h3"} size={"lg"} pb={"2"}>
          Popular Groups
        </Heading>
        <Grid templateColumns={"repeat(3, 1fr)"} gap={3}>
          <Card
            border={"1px"}
            borderColor={"gray.300"}
            borderRadius="lg"
            shadow={"2xl"}
          >
            <CardBody>
              <Grid templateColumns={"repeat(5, 1fr)"}>
                <GridItem colSpan={1}>
                  <Image src="https://secure.meetupstatic.com/next/images/fallbacks/group-cover-2-square.webp?w=96" />
                </GridItem>
                <GridItem colSpan={4} px={3}>
                  <Text fontSize={"xl"}>New Group</Text>
                  <Text fontSize={"md"}>New Dining Out Meetup Group</Text>
                </GridItem>
              </Grid>
              <Divider orientation="horizontal" my={2} bg={"black"} />
              <Text textAlign={"left"} px={2} py={1}>
                Chakra UI
              </Text>
            </CardBody>
          </Card>
          <Card
            border={"1px"}
            borderColor={"gray.300"}
            borderRadius="lg"
            shadow={"2xl"}
          >
            <CardBody>
              <Grid templateColumns={"repeat(5, 1fr)"}>
                <GridItem colSpan={1}>
                  <Image src="https://secure.meetupstatic.com/next/images/fallbacks/group-cover-2-square.webp?w=96" />
                </GridItem>
                <GridItem colSpan={4} px={3}>
                  <Text fontSize={"xl"}>New Group</Text>
                  <Text fontSize={"md"}>New Dining Out Meetup Group</Text>
                </GridItem>
              </Grid>
              <Divider orientation="horizontal" my={2} bg={"black"} />
              <Text textAlign={"left"} px={2} py={1}>
                Chakra UI
              </Text>
            </CardBody>
          </Card>
          <Card
            border={"1px"}
            borderColor={"gray.300"}
            borderRadius="lg"
            shadow={"2xl"}
          >
            <CardBody>
              <Grid templateColumns={"repeat(5, 1fr)"}>
                <GridItem colSpan={1}>
                  <Image src="https://secure.meetupstatic.com/next/images/fallbacks/group-cover-2-square.webp?w=96" />
                </GridItem>
                <GridItem colSpan={4} px={3}>
                  <Text fontSize={"xl"}>New Group</Text>
                  <Text fontSize={"md"}>New Dining Out Meetup Group</Text>
                </GridItem>
              </Grid>
              <Divider orientation="horizontal" my={2} bg={"black"} />
              <Text textAlign={"left"} px={2} py={1}>
                Chakra UI
              </Text>
            </CardBody>
          </Card>
        </Grid>
      </Container>
    </Box>
  );
};

export default Popular;
