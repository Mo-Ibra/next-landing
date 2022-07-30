import { Header, Navbar, Title } from "../components/";
import { Articles, Gallery } from '../sections/';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Articles />
      <Gallery />
    </>
  )
}

export default Home;