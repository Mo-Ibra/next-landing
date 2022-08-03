import { Footer, Header, Navbar } from "../components/";
import { Articles, Features, Gallery, Pricing, Services, Skills, Team, Testimonials, WorkStep, Vidoes, Stats, Discount } from '../sections/';

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
      <Stats />
      <Discount />
      <Footer />
    </>
  )
}

export default Home;