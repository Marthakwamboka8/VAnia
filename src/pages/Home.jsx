import Navbar from "../components/layout/Navbar";
import HeroCarousel from "../components/home/HeroCarousel";
import Footer from "../components/layout/Footer";
import CTA from "../components/about/CTA";
import CompanyVideo from "../components/home/CompanyVideo";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <CompanyVideo/>
      <CTA/>
      <Footer />
    </>
  );
};

export default Home;