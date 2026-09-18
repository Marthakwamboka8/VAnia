import "./JoinOurTeam.css";
import Navbar from "../components/layout/Navbar";

const JoinOurTeam = () => {
  return (
    <>
      <Navbar />

      <main className="join-team">

        {/* HERO */}
        <section className="join-hero">
          <div className="join-hero-content">
            <p className="section-label">JOIN OUR TEAM</p>

            <h1>
              Do meaningful work.
              <br />
              Make room for what matters.
            </h1>

            <p>
              VAnia is building a community of capable professionals who
              believe great support is about more than completing tasks.
              It's about creating space for people and businesses to do
              their best work.
            </p>

            <a href="#opportunities" className="join-button">
              Explore Opportunities
            </a>
          </div>
        </section>


        {/* WHY VANIA */}
        <section className="why-vania-team">
          <div className="team-section-heading">
            <p className="section-label">WHY VANIA</p>

            <h2>Work that has purpose.</h2>

            <p>
              At VAnia, your work helps business leaders and growing
              companies focus on the things that matter most.
            </p>
          </div>

          <div className="team-values">

            <div className="team-value">
              <span>01</span>
              <h3>Work with purpose</h3>
              <p>
                Your work creates real space for business leaders and
                teams to focus on their priorities.
              </p>
            </div>

            <div className="team-value">
              <span>02</span>
              <h3>Grow your skills</h3>
              <p>
                Build practical experience while developing the skills
                needed to support modern businesses.
              </p>
            </div>

            <div className="team-value">
              <span>03</span>
              <h3>Work remotely</h3>
              <p>
                Contribute your skills from wherever you do your best
                work.
              </p>
            </div>

            <div className="team-value">
              <span>04</span>
              <h3>Grow with us</h3>
              <p>
                Join a Kenyan-founded company creating opportunities for
                talented professionals.
              </p>
            </div>

          </div>
        </section>


        {/* WHO WE ARE LOOKING FOR */}
        <section className="who-we-need">
          <div className="who-content">

            <div>
              <p className="section-label">WHO WE'RE LOOKING FOR</p>

              <h2>
                We care about
                <br />
                how you work.
              </h2>
            </div>

            <div className="who-text">
              <p>
                You don't need to know everything. You do need to care
                about doing things well.
              </p>

              <p>
                We're looking for people who are dependable, proactive,
                curious and thoughtful about the work they do.
              </p>

              <div className="qualities">
                <span>Reliable</span>
                <span>Proactive</span>
                <span>Organized</span>
                <span>Communicative</span>
                <span>Detail-oriented</span>
                <span>Professional</span>
                <span>Discreet</span>
                <span>Willing to learn</span>
              </div>
            </div>

          </div>
        </section>


        {/* OPPORTUNITIES */}
        <section className="opportunities" id="opportunities">

          <div className="team-section-heading">
            <p className="section-label">OPPORTUNITIES</p>

            <h2>Where you could fit.</h2>

            <p>
              Different businesses need different kinds of support.
              There may be a place for your strengths at VAnia.
            </p>
          </div>

          <div className="role-grid">

            <div className="role-card">
              <span>01</span>
              <h3>Virtual Assistant</h3>
              <p>
                Provide thoughtful administrative and day-to-day support
                to busy professionals and businesses.
              </p>
            </div>

            <div className="role-card">
              <span>02</span>
              <h3>Executive Assistant</h3>
              <p>
                Support founders, executives and business leaders with
                organization, communication and priorities.
              </p>
            </div>

            <div className="role-card">
              <span>03</span>
              <h3>Operations Support</h3>
              <p>
                Help businesses stay organized, efficient and moving
                forward.
              </p>
            </div>

            <div className="role-card">
              <span>04</span>
              <h3>Research & Project Support</h3>
              <p>
                Turn information, ideas and projects into organized,
                useful work.
              </p>
            </div>

            <div className="role-card">
              <span>05</span>
              <h3>Client & Communication Support</h3>
              <p>
                Help businesses communicate clearly and maintain strong
                relationships with their clients.
              </p>
            </div>

            <div className="role-card">
              <span>06</span>
              <h3>Something else?</h3>
              <p>
                Don't see your exact skill set? We'd still like to hear
                what you can bring to VAnia.
              </p>
            </div>

          </div>
        </section>


        {/* PROCESS */}
        <section className="joining-process">

          <div className="team-section-heading">
            <p className="section-label">HOW IT WORKS</p>

            <h2>A thoughtful process.</h2>

            <p>
              We want to understand the person behind the application,
              not just the experience on your CV.
            </p>
          </div>

          <div className="process-grid">

            <div className="process-step">
              <span>01</span>
              <h3>Apply</h3>
              <p>
                Tell us about yourself, your experience and what you can
                bring to VAnia.
              </p>
            </div>

            <div className="process-step">
              <span>02</span>
              <h3>Get to know us</h3>
              <p>
                We'll learn more about your skills, working style and
                goals.
              </p>
            </div>

            <div className="process-step">
              <span>03</span>
              <h3>Assessment</h3>
              <p>
                Depending on the role, you may complete a practical
                assessment.
              </p>
            </div>

            <div className="process-step">
              <span>04</span>
              <h3>Welcome to VAnia</h3>
              <p>
                If we're a good fit, we'll take the next step together.
              </p>
            </div>

          </div>
        </section>


       <section className="join-cta">

  <p className="section-label">READY WHEN YOU ARE</p>

  <h2>
    Think you could be
    <br />
    a good fit?
  </h2>

  <p>
    We'd love to hear from you. Send your CV to our team and tell us
    a little about yourself, your experience, and the kind of work
    you're interested in.
  </p>

  <div className="cv-instruction">
    <p>
      Send your CV to  
    </p>

    <a href="mailto:talent@vaniaassist.com">
      talent@vaniaassist.com
    </a>

    <span>
        Please include the role you're interested in as the subject of
      your email.
    </span>
  </div>

</section>

      </main>
    </>
  );
};

export default JoinOurTeam;