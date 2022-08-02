import { Header, Navbar } from "../components/";
import { Articles, Features, Gallery } from '../sections/';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Articles />
      <Gallery />
      <Features />
    </>
  )
}

export default Home;