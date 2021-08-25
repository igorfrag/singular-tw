import Footer from '../Components/Footer';
import HeroSection from '../Components/homepage/HeroSection';
import Services from '../Components/homepage/Services';
import Navbar from '../Components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Footer />
    </>
  );
}
