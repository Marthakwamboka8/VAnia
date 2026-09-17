import "./AboutSections.css";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="problems">

      <div className="section-container">

        <div className="section-heading">

          <p className="section-tag">WHAT YOU CAN LET GO OF</p>

          <h2>
            Your attention belongs where it matters most.
          </h2>

          <p className="section-subtitle">
            The details behind a successful business matter. But not every
            detail needs to require your attention. VAnia provides thoughtful
            support for the work that keeps your day moving, giving you more
            room to focus on what only you can do.
          </p>

        </div>


        <div className="problem-grid">

          <div className="problem-card">

            <span className="problem-number">01</span>

            <h3>Make space in your calendar.</h3>

            <p>
              From scheduling and meeting coordination to reminders and
              follow-ups, create a little more breathing room in your day.
            </p>

          </div>


          <div className="problem-card">

            <span className="problem-number">02</span>

            <h3>Stay close to what matters.</h3>

            <p>
              Keep correspondence, communication and important follow-ups
              moving without having to keep every conversation in your head.
            </p>

          </div>


          <div className="problem-card">

            <span className="problem-number">03</span>

            <h3>Have the information when you need it.</h3>

            <p>
              Research, reports and organised information can be prepared
              thoughtfully, giving you a clearer starting point for your
              next decision.
            </p>

          </div>


          <div className="problem-card">

            <span className="problem-number">04</span>

            <h3>Let the details happen in the background.</h3>

            <p>
              Documentation, files, spreadsheets and everyday administration
              can be handled with care, so they don't continually compete
              for your attention.
            </p>

          </div>

        </div>


        <div className="cta-panel">

          <p className="section-tag">WHEN YOU'RE READY</p>

          <h3>
            Perhaps it's time to stop doing everything yourself.
          </h3>

          <p>
            You don't need to know exactly what to delegate before you speak
            with us. Let's have a conversation about your priorities and
            where thoughtful support could give you back some room.
          </p>

          <div className="cta-buttons">

            <Link
              to="/services"
              className="btn-primary text-center"
            >
              see how we can help            </Link>

            {/* <Link
              to="/services"
              className="btn-outline"
            >
              See How We Can Help
            </Link> */}

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;