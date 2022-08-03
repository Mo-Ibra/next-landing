import { Header, Navbar } from "../components/";
import { Articles, Features, Gallery, Pricing, Services, Skills, Team, Testimonials, WorkStep, Vidoes } from '../sections/';

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
      <WorkStep />
      <Pricing />
      <Vidoes />
    </>
  )
}

export default Home;