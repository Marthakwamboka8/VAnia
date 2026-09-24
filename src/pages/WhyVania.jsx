import { Link } from "react-router-dom";
import "./WhyVania.css";
import Navbar from "../components/layout/Navbar";
const WhyVania = () => {
  const reasons = [
    {
      number: "01",
      title: "Professionally Prepared",
      text: "Our assistants are equipped with the skills, professionalism, and mindset needed to support modern businesses effectively.",
    },
    {
      number: "02",
      title: "Support With Purpose",
      text: "We don't believe in support for the sake of support. Our goal is to take meaningful work off your plate and create room for what matters most.",
    },
    {
      number: "03",
      title: "Built Around You",
      text: "Every business works differently. We take the time to understand your needs and connect you with support that fits the way you work.",
    },
    {
      number: "04",
      title: "Proactive, Not Just Reactive",
      text: "Great assistance goes beyond waiting for instructions. We value initiative, organization, communication, and anticipating what needs attention.",
    },
    {
      number: "05",
      title: "Kenya-Based Talent",
      text: "VAnia connects businesses with skilled Kenyan virtual assistants while creating meaningful opportunities for talented professionals.",
    },
    {
      number: "06",
      title: "More Room to Lead",
      text: "When the details are handled thoughtfully, you can spend more time making decisions, building relationships, and moving your business forward.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Understand",
      text: "We start by understanding your business, your priorities, and where you need support.",
    },
    {
      number: "02",
      title: "Match",
      text: "We help connect you with support suited to your needs and working style.",
    },
    {
      number: "03",
      title: "Support",
      text: "Your assistant becomes an extension of your workflow, helping keep things organized and moving.",
    },
    {
      number: "04",
      title: "Grow",
      text: "With the right support in place, you have more space to focus on the work only you can do.",
    },
  ];

  return (
    <>
      <Navbar />
    <main className="why-vania">

      {/* HERO */}
      <section className="why-hero">
        <div className="why-hero-content">
          <span className="why-eyebrow">WHY VANIA</span>

          <h1>
            More than assistance.
            <br />
            <span>Support with purpose.</span>
          </h1>

          <p>
            Your time is valuable. VAnia helps you take care of the details
            without losing sight of the bigger picture.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="why-intro">
        <div className="why-intro-heading">
          <span className="why-eyebrow">THE VANIA DIFFERENCE</span>

          <h2 className="heading-h2">
            The right support can
            <br />
            change how you work.
          </h2>
        </div>

        <div className="why-intro-text">
          <p>
            Running a business means constantly balancing decisions,
            relationships, projects, communication, and everything in between.
          </p>

          <p>
            VAnia exists to make that load lighter. We connect businesses with
            skilled virtual assistants who bring professionalism, initiative,
            and thoughtful support to the work behind the scenes.
          </p>
        </div>
      </section>

      {/* REASONS */}
      <section className="why-reasons">
        <div className="section-heading">
          <span className="why-eyebrow">WHY BUSINESSES CHOOSE VANIA</span>

          <h2>
            Built around the way
            <br />
            <span>you work.</span>
          </h2>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article className="reason-card" key={reason.number}>
              <span className="reason-number">{reason.number}</span>

              <h3>{reason.title}</h3>

              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="why-approach">
        <div className="approach-heading">
          <span className="why-eyebrow">OUR APPROACH</span>

          <h2>
            Simple support.
            <br />
            <span>Thoughtfully delivered.</span>
          </h2>
        </div>

        <div className="approach-grid">
          {steps.map((step) => (
            <div className="approach-step" key={step.number}>
              <span>{step.number}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="why-closing">
        <div className="why-closing-content">
          <span className="why-eyebrow">MAKE ROOM FOR MORE</span>

          <h2 className="heading-h2">
            Focus on the work
            <br />
            <span>only you can do.</span>
          </h2>

          <p>
            Let VAnia handle the details while you focus on leading,
            building, and growing.
          </p>
 <Link to="/bookconsultation" className="btn-primary">
            Get Started
          </Link>

          
        </div>
      </section>

    </main>
    </>
  );
};


export default WhyVania;