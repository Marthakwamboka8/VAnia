import Navbar from "../components/layout/Navbar";
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
           VAnia Assist is a Kenya-based executive assistance company providing highly
           capable, professionally trained Kenyan Virtual Assitants to founders, executivies, consultants,
           investors and growing businesses globally.
           <br/>

           The company goes beyond traditional Virtual assistance. Our assistants operates
           as remote executive partners who anticipate needs, manage priorities, protect executives' time and help clients operate more efficiently.
           <br/>

          <b>VAnia Assist gives busy executives back their time by providing intelligent, proactive and dependable remote executive support from Kenya </b>

            </p>
          </div>
        </section>
        <Story/>
        <MissionVision/>
        <CTA/>
      </main>
    </>
  );
};

export default About;