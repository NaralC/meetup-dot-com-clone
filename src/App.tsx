import { Box } from '@chakra-ui/react'
import Banner from './components/banner'
import ItWorks from './components/it-works'
import Popular from './components/popular'
import UpcomingOnlineEvents from './components/upcoming-online-events'

function App() {

  return (
    <Box pb={5}>
      <Banner />
      <ItWorks />
      <UpcomingOnlineEvents />
      <Popular />
    </Box>
  )
}

export default App
