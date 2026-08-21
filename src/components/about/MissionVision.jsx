import "./AboutSections.css";

const MissionVision = () => {
  return (
    <section className="mission section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-tag">OUR PURPOSE</p>
          <h2>Driven by impact. Guided by excellence.</h2>
        </div>

        <div className="mission-grid">

          <div className="purpose-card">
            <div className="icon-circle">
              <span>◉</span>
            </div>

            <h3>Our Mission</h3>

            <p>
              To connect ambitious executives around the world with talented Kenyan professionals who provide intelligent, proactive and dependable remote assistance.
            </p>
          </div>

          <div className="purpose-card">
            <div className="icon-circle">
              <span>◎</span>
            </div>

            <h3>Our Vision</h3>

            <p>
              To become one of Africa's most trusted providers of premium remote executive talent.
            </p>
          </div>

        </div>

        
        <div className="purpose-card">
            <div className="icon-circle">
                <span>◎</span>
                 </div>
                <h3>Brand Promise</h3>
                <p>
                    VAnia is not simply selling hours. it sells Time + Intelligence + Reliability + Initiative + Peace of Mind.
                </p>
           

        </div>

      </div>
    </section>
  );
};

export default MissionVision;