import AboutUs from "./Components/AboutUs";
import AboutUsSection from "./Components/AboutUsSection";
import ContactUs from "./Components/ContactUs";
import HeroSection from "./Components/HeroSection";
import HomeSection from "./Components/HomeSection";
import Navbar from "./Components/Navbar";
import ServicesSection from "./Components/ServicesSection";
import WhyChooseUs from "./Components/WhyChooseUs";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      {/* <HomeSection /> */}
      {/* <AboutUs /> */}
      {/* <WhyChooseUs /> */}
      {/* <ServicesSection /> */}
      <ContactUs />
    </div>
  );
}

export default App;
