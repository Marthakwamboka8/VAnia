import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Services.css";

const Services = () => {
  return (
    <>
      <Navbar />

      <main className="services">

        {/* Hero */}
        <section className="services-hero">
          <div className="services-hero-content">
            <p className="services-tag">OUR SERVICES</p>

            <h1>
              Support that moves
              <span> your business forward.</span>
            </h1>

            <p>
              VAnia provides reliable, proactive virtual assistance designed
              to help executives, founders and growing businesses operate
              with greater clarity and efficiency.
            </p>
          </div>
        </section>


        {/* Services */}
        <section className="services-list">

          <div className="services-container">

            <div className="services-heading">
              <p className="services-tag">WHAT WE DO</p>

              <h2>
                More than assistance.
                <br />
                A partner in your productivity.
              </h2>
            </div>


            <div className="services-grid">

              <div className="service-card">
                <span>01</span>
                <h3>Executive Assistance</h3>
                <p>
                  Strategic day-to-day support that helps executives stay
                  organised, focused and in control of their priorities.
                </p>
              </div>


              <div className="service-card">
                <span>02</span>
                <h3>Calendar Management</h3>
                <p>
                  Keep your schedule organised with meeting coordination,
                  appointment management and intelligent calendar planning.
                </p>
              </div>


              <div className="service-card">
                <span>03</span>
                <h3>Email & Communication</h3>
                <p>
                  Manage inboxes, organise communications and ensure important
                  messages and follow-ups never get lost.
                </p>
              </div>


              <div className="service-card">
                <span>04</span>
                <h3>Research & Reporting</h3>
                <p>
                  Get the information you need to make informed decisions
                  through structured research, data gathering and reporting.
                </p>
              </div>


              <div className="service-card">
                <span>05</span>
                <h3>Travel & Meeting Coordination</h3>
                <p>
                  From itineraries to meeting logistics, we handle the details
                  so you can focus on the bigger picture.
                </p>
              </div>


              <div className="service-card">
                <span>06</span>
                <h3>Administrative Operations</h3>
                <p>
                  Take recurring administrative tasks off your plate and keep
                  your business operations running smoothly.
                </p>
              </div>

            </div>

          </div>

        </section>
        {/* Detailed Services */}
<section className="detailed-services">

  <div className="services-container">

    <div className="services-heading">
      <p className="services-tag">OUR EXPERTISE</p>

      <h2>
        Support designed around
        <br />
        your everyday needs.
      </h2>

      <p className="services-description">
        From routine administration to high-level executive support,
        VAnia provides practical assistance that keeps your business
        organised, efficient and moving forward.
      </p>
    </div>


    <div className="detailed-services-grid">

      {/* Executive Assistance */}
      <div className="detailed-service-card">

        <span className="service-number">01</span>

        <h3>Executive Assistance</h3>

        <p className="service-intro">
          Dedicated support that helps executives manage their time,
          priorities and responsibilities more effectively.
        </p>

        <ul>
          <li>Inbox and correspondence management</li>
          <li>Calendar and schedule management</li>
          <li>Meeting preparation and coordination</li>
          <li>Task and priority management</li>
          <li>Document preparation</li>
          <li>Follow-ups and reminders</li>
          <li>Personal administration</li>
          <li>CRM management</li>

        </ul>

      </div>


      {/* Calendar & Scheduling */}
      <div className="detailed-service-card">

        <span className="service-number">02</span>

        <h3>Business Operations</h3>

        <p className="service-intro">
          Keep your business running smoothly with support for day-to-day operations,
          project management and administrative tasks.
        </p>

        <ul>
          <li>Project coordination</li>
          <li>SOP creation and maintenance</li>
          <li>Data entry and management</li>
          <li>Customer support</li>
          <li>Vendor coordination</li>
          <li>Operations administration</li>
        </ul>

      </div>


      {/* Email & Communication */}
      <div className="detailed-service-card">

        <span className="service-number">03</span>

        <h3>Digital Support</h3>

        <p className="service-intro">
          Stay updated on communications, manage your inbox and ensure important messages
          and follow-ups are never missed.
        </p>

        <ul>
          <li>LinkedIn management</li>
          <li>Social media scheduling</li>
          <li>Email management and organisation</li>
          <li>Newsletter management</li>
          <li>Content creation and research</li>
          <li>Basic Canva design</li>
          <li>Website administration</li>
        </ul>

      </div>


      {/* Research & Reporting */}
      <div className="detailed-service-card">

        <span className="service-number">04</span>

        <h3>Research & Reporting</h3>

        <p className="service-intro">
          Get organised, useful information that supports better
          business and executive decision-making.
        </p>

        <ul>
          <li>Market research</li>
          <li>Competitor research</li>
          <li>Industry research</li>
          <li>Data collection</li>
          <li>Report preparation</li>
          <li>Information organisation</li>
        </ul>

      </div>


      {/* Travel & Meetings */}
      <div className="detailed-service-card">

        <span className="service-number">05</span>

        <h3>Travel & Meeting Coordination</h3>

        <p className="service-intro">
          Take care of the logistics behind business travel and
          important meetings.
        </p>

        <ul>
          <li>Travel itinerary planning</li>
          <li>Accommodation research</li>
          <li>Meeting logistics</li>
          <li>Itinerary organisation</li>
          <li>Travel reminders</li>
          <li>Meeting scheduling</li>
        </ul>

      </div>


      {/* Administrative Operations */}
      <div className="detailed-service-card">

        <span className="service-number">06</span>

        <h3>Administrative Operations</h3>

        <p className="service-intro">
          Reliable administrative support that keeps everyday
          business operations running smoothly.
        </p>

        <ul>
          <li>Data entry and organisation</li>
          <li>Document management</li>
          <li>File organisation</li>
          <li>Spreadsheet management</li>
          <li>Online research</li>
          <li>Administrative coordination</li>
        </ul>

      </div>

    </div>

  </div>

</section>



        {/* How it works */}
        <section className="how-it-works">

          <div className="services-container">

            <div className="services-heading centered">
              <p className="services-tag">HOW IT WORKS</p>

              <h2>
                Simple support.
                <br />
                Purposeful results.
              </h2>
            </div>


            <div className="steps">

              <div className="step">
                <span>01</span>
                <h3>Tell us what you need</h3>
                <p>
                  Share your business needs, priorities and the type of support
                  you're looking for.
                </p>
              </div>


              <div className="step">
                <span>02</span>
                <h3>Meet your match</h3>
                <p>
                  We connect you with a skilled Kenyan virtual assistant whose
                  capabilities align with your needs.
                </p>
              </div>


              <div className="step">
                <span>03</span>
                <h3>Get back to what matters</h3>
                <p>
                  Your assistant takes care of the details while you focus on
                  growing and leading your business.
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default Services;