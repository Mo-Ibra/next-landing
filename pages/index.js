import { Header, Navbar } from "../components/";
import { Articles, Features, Gallery, Team, Testimonials } from '../sections/';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
      <Team />
    </>
  )
}

export default Home;