import { Header, Navbar } from "../components/";
import { Articles, Features, Gallery, Services, Team, Testimonials } from '../sections/';

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
      <Services />
    </>
  )
}

export default Home;