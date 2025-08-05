import AboutUs from "./Components/AboutUs";
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
      {/* <HomeSection /> */}
      <AboutUs />
      <WhyChooseUs />
      <ServicesSection />
      <ContactUs />
    </div>
  );
}

export default App;
