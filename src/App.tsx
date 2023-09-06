import { Box } from '@chakra-ui/react'
import Banner from './components/banner'
import ItWorks from './components/it-works'
import Popular from './components/popular'
import UpcomingOnlineEvents from './components/upcoming-online-events'
import StayConnected from './components/stay-connected'

function App() {

  return (
    <Box pb={5}>
      <Banner />
      <ItWorks />
      <UpcomingOnlineEvents />
      <Popular />
      <StayConnected />
    </Box>
  )
}

export default App
