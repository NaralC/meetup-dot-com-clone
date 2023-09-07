import { Box, Image } from "@chakra-ui/react";
import Banner from "./components/banner";
import ItWorks from "./components/it-works";
import Popular from "./components/popular";
import UpcomingOnlineEvents from "./components/upcoming-online-events";
import StayConnected from "./components/stay-connected";
import Stories from "./components/stories";
import imageBg from "./assets/bg.svg";

function App() {
  return (
    <Box position="absolute" left="0" top="0" right="0">
      <Banner />
      <ItWorks />
      <UpcomingOnlineEvents />
      <Popular />
      <StayConnected />
      <Stories />

      <Box position="absolute" inset={"0"} height="100vh" zIndex={-1}>
        <Image w="80%" mx="auto" objectFit="cover" sizes="300" src={imageBg} />
      </Box>
    </Box>
  );
}

export default App;
