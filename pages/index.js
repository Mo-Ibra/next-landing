import { Header, Navbar } from "../components/";
import { Articles, Features, Gallery, Services, Skills, Team, Testimonials } from '../sections/';

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
      <Skills />
    </>
  )
}

export default Home;