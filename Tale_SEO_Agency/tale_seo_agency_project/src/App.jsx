import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import InfoSection from "../components/InfoSection.jsx";
import PreHeader from "../components/PreHeader.jsx";
import ProjectSection from "../components/ProjectSection.jsx";
import ServiceSection from "../components/ServiceSection.jsx";

function App() {
  return (
    <>
      <PreHeader />
      <Header />
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <InfoSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
