import { Header, Navbar } from "../components/";
import { Articles, Features, Gallery, Services, Skills, Team, Testimonials, WorkStep } from '../sections/';

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
    </>
  )
}

export default Home;