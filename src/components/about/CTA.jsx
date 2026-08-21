import "./AboutSections.css";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="problems">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-tag">WHY VANIA</p>
          <h2>The executive support businesses have been missing.</h2>
          <p className="section-subtitle">
            VAnia helps founders, executives and growing teams reclaim their
            time by providing dependable, proactive virtual assistance.
          </p>
        </div>

        <div className="problem-grid">

          <div className="problem-card">
            <h3>Overloaded schedules</h3>
            <p>
              Delegate calendar management, meeting coordination and daily
              administrative work so you can focus on strategic decisions.
            </p>
          </div>

          <div className="problem-card">
            <h3>Missed opportunities</h3>
            <p>
              Never lose track of follow-ups, emails or client communication
              with assistants who keep your workflow moving.
            </p>
          </div>

          <div className="problem-card">
            <h3>Operational inefficiency</h3>
            <p>
              Streamline documentation, research, reporting and executive
              support with highly trained Kenyan virtual assistants.
            </p>
          </div>

          <div className="problem-card">
            <h3>Scaling without overhead</h3>
            <p>
              Access professional executive support without the cost of hiring
              full-time in-house administrative staff.
            </p>
          </div>

        </div>

        <div className="cta-panel">
          <h3>Work smarter with purpose.</h3>

          <p>
            Whether you're building a startup or managing a growing business,
            VAnia connects you with professionals who help you operate more
            efficiently every day.
          </p>

          <div className="cta-buttons">
            <Link to="/assistants" className="btn-primary">
              Find an Assistant
            </Link>

            <Link to="/services" className="btn-outline">
              Explore Services
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;