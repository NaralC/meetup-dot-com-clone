import { Box, Image, Container, Heading, Grid, Link } from "@chakra-ui/react";

export default function Stories() {
  return (
    <Box mt={10}>
      <Container maxWidth="container.xl">
        <Box
          mb="7"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box alignItems="center" w="100%">
            <Heading alignItems="center" as="h3" size="lg" pb="2">
              Stories from Meetups
            </Heading>
            <Box maxW="700px">
              People on Meetup have fostered community, learned new skills,
              started businesses, and made life-long friends. Learn how.
            </Box>
          </Box>
        </Box>
        <Grid mt="10" mb="40" templateColumns="repeat(3, 1fr)" gap={6}>
          <Box width="100%" alignItems="left">
            <Link>
              <Image
                position="relative"
                src={
                  "https://secure.meetupstatic.com/next/images/indexPage/first_article.webp?w=2048"
                }
                _hover={{ opacity: "0.8" }}
                alt="brand"
                mr="15px"
                width="100%"
              />
              <Box flex="flex" flexDirection="column">
                <Heading
                  alignItems="center"
                  as="h6"
                  fontWeight="bold"
                  size="md"
                  pt="4"
                  pb="4"
                >
                  Three Ways To Make Coworker Friendships While Working From
                  Home
                </Heading>
              </Box>
            </Link>

            <Box>
              Work friendships don’t need to fade just because you’re working
              remotely. Here are three fun ways you can get to know your
              colleagues.
            </Box>
          </Box>

          <Box width="100%" alignItems="left">
            <Link>
              <Image
                position="relative"
                src={
                  "https://secure.meetupstatic.com/next/images/indexPage/second_article.webp?w=2048"
                }
                alt="brand"
                _hover={{ opacity: "0.8" }}
                mr="15px"
                width="100%"
              />
              <Box flex="flex" flexDirection="column">
                <Heading
                  alignItems="center"
                  as="h6"
                  fontWeight="bold"
                  size="md"
                  pt="4"
                  pb="4"
                >
                  Five Ways to Feel More Connected
                </Heading>
              </Box>
            </Link>

            <Box>
              Since Meetup began nearly 20 years ago, we’ve fostered connections
              between more than 50 million people in 190 countries worldwide.
              Here are five simple strategies to help you feel more connected
              and improve your wellbeing.
            </Box>
          </Box>

          <Box width="100%" alignItems="left">
            <Link>
              <Image
                position="relative"
                src={
                  "https://secure.meetupstatic.com/next/images/indexPage/third_article.webp?w=2048"
                }
                alt="brand"
                _hover={{ opacity: "0.8" }}
                mr="15px"
                width="100%"
              />
              <Box flex="flex" flexDirection="column">
                <Heading
                  alignItems="center"
                  as="h6"
                  fontWeight="bold"
                  size="md"
                  pt="4"
                  pb="4"
                >
                  How To Live Your Best Social Life
                </Heading>
              </Box>
            </Link>

            <Box>
              Social interaction is a key part of any healthy lifestyle.
              Discover all different kinds of events that’ll help you maintain a
              fun and fulfilling social life.
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
