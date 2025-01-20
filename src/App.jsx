import Cta from "./sections/Cta";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Projects/>
      <Testimonials />
      <Cta />
      <Footer />
    </>
  )
}