
import "./AboutSections.css";

const Story = () => {
  return (
    <section className="story section">
      <div className="section-container">

        <div className="story-left">
          <p className="section-tag">OUR STORY</p>
          <h2>Purpose is built into our name.</h2>
        </div>

        <div className="story-right">
          <p>
            VAnia Assist is a Kenya-based executive virtual assistance company
            founded on one simple belief: exceptional support should create
            meaningful impact for both businesses and professionals.
          </p>

          <p>
            Our name combines <strong>VA</strong> (Virtual Assistant) with
            <strong> Nia</strong>, the Swahili word for purpose. It reflects our
            commitment to providing proactive, intelligent and dependable
            executive support rather than task-based outsourcing.
          </p>

          <p>
            We empower founders, executives, consultants and growing businesses
            around the world by connecting them with highly capable Kenyan
            executive assistants trained to anticipate needs, manage priorities
            and protect valuable time.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Story;