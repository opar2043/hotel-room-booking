
import RoomCard from '../Room/RoomCard'
import Service from '../Service/Service'
import Banner from '../Shared/Banner'
import Hero from './Hero'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Hero></Hero>
      <RoomCard></RoomCard>
      <Service></Service>
    </div>
  )
}

export default Home