import { Header, Navbar } from "../components/";
import { Articles, Features, Gallery, Pricing, Services, Skills, Team, Testimonials, WorkStep } from '../sections/';

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
    </>
  )
}

export default Home;