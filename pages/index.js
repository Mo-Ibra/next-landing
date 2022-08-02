import { Header, Navbar } from "../components/";
import { Articles, Features, Gallery, Testimonials } from '../sections/';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
    </>
  )
}

export default Home;