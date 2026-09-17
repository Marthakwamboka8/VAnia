import "./CompanyVideo.css";

const CompanyVideo = () => {
  return (
    <section className="company-video" id="company-video">
      <div className="video-container">

        <div className="video-intro">
          <p className="video-label">A NOTE FROM VANIA</p>

          <h2>
            Your time is valuable.
            <br />
            Your attention even more so.
          </h2>

          <p className="video-description">
            Running a business means making decisions, building relationships,
            and thinking about what comes next. The details still matter,
            but they shouldn't all have to sit on your shoulders.
          </p>

          <p className="video-description">
            Take a moment to meet VAnia and discover how thoughtful,
            dependable remote support can create more room for the work
            only you can do.
          </p>
        </div>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/w8S6iSIEI6w"
            title="A Note From VAnia"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default CompanyVideo;