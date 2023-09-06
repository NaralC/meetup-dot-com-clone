import { Box, Image, Container, Heading } from "@chakra-ui/react";

const StayConnected: React.FC = () => {
  return (
    <Box my="20">
      <Container maxWidth="container.xl">
        <Box
          display="flex"
          pos="relative"
          justify-content="space-between"
          alignItems="center"
        >
          <Box>
            <Image
              w="260px"
              src={
                "https://secure.meetupstatic.com/next/images/apps/ScreenIos.webp?w=256"
              }
            ></Image>
          </Box>
          <Box pos="relative" mx="auto" alignItems={"center"}>
            <Image
              w="80px"
              left="0"
              src="https://www.meetup.com/blog/wp-content/uploads/2019/12/meetup-logo-m-swarm.svg"
            />
            <Heading as="h6" size="md" my="7">
              Stay connected. <br /> Download the app.
            </Heading>
            <Box display="flex">
              <Image
                w="180px"
                p="5"
                src={
                  "https://secure.meetupstatic.com/next/images/app-download/android/download_en-US.svg?w=256"
                }
              ></Image>
              <Image
                w="180px"
                p="5"
                src={
                  "https://secure.meetupstatic.com/next/images/app-download/ios/download_en-US.svg?w=256"
                }
              ></Image>
            </Box>
          </Box>
          <Box>
            <Image
              w="260px"
              right="0"
              src={
                "https://secure.meetupstatic.com/next/images/apps/ScreenAndroid.webp?w=256"
              }
            ></Image>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StayConnected;
