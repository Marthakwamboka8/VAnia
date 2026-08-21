import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./About.css";
import Story from "../components/about/Story";
import MissionVision from "../components/about/MissionVision";
import CTA from "../components/about/CTA";

const About = () => {
  return (
    <>
      <Navbar />

      <main className="about">

        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="hero-tag">ABOUT VANIA</p>

            <h1>Virtual Assistance With Purpose.</h1>

            <p className="hero-text">
           VAnia assist is a Kenya-based executive assistane company providing highly
           capable, professionally trained Kenyan Virtual Assitants to founders, executivies, consultants,
           investors and growing businesses globally.

           The company goes beyond traditional Virtual assistance. VAnia assist will position its assistants
           as remote executive partners who anticipate nedds, manage priorities, protect executive time and help clients operate more efficiently.

           "VAnia assist gives busy executives back their time by providing intelligent, proactive and dependable remote executive support from Kenya "

            </p>
          </div>
        </section>
        <Story/>
        <MissionVision/>
        <CTA/>
      </main>

      <Footer />
    </>
  );
};

export default About;