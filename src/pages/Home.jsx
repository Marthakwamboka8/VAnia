import Navbar from "../components/layout/Navbar";
import HeroCarousel from "../components/home/HeroCarousel";
import Footer from "../components/layout/Footer";
import CTA from "../components/about/CTA";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <CTA/>
      <Footer />
    </>
  );
};

export default Home;