import "./BookConsultation.css";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    support: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    try {
      // Use the API URL from the environment variable
      const API_URL = import.meta.env.VITE_API_URL;

      // Make sure the API URL exists
      if (!API_URL) {
        throw new Error("API URL is not configured.");
      }

      const response = await fetch(
        `${API_URL}/api/consultation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong."
        );
      }

      // Successful submission
      setStatus(
        "Your consultation request has been sent successfully!"
      );

      // Clear the form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        support: "",
        message: "",
      });

    } catch (error) {
      console.error("Submission error:", error);

      setStatus(
        "Something went wrong while sending your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="book-consultation">

        {/* Hero */}
        <section className="consultation-hero">
          <p>BOOK A CONSULTATION</p>

          <h1>
            Let's make some room
            <br />
            for what matters.
          </h1>

          <p>
            You don't need to have everything figured out before you reach
            out. Tell us a little about your business, your priorities, and
            what's taking up more of your time than it should.
          </p>
        </section>

        {/* How it works */}
        <section className="consultation-process">
          <p>WHAT HAPPENS NEXT</p>

          <h2>A conversation, not a sales pitch.</h2>

          <div className="process-grid">

            <div className="process-card">
              <span>01</span>

              <h3>Tell us about your needs</h3>

              <p>
                Share a little about your business, your responsibilities,
                and where you'd like more support.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>

              <h3>We'll understand your priorities</h3>

              <p>
                We'll take the time to understand how you work and what kind
                of assistance would genuinely make a difference.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>

              <h3>We'll explore the right fit</h3>

              <p>
                Together, we'll explore the kind of support that makes sense
                for your situation.
              </p>
            </div>

            <div className="process-card">
              <span>04</span>

              <h3>You decide when you're ready</h3>

              <p>
                No pressure. Just a clear conversation about what's possible
                and what comes next.
              </p>
            </div>

          </div>
        </section>

        {/* Booking */}
        <section className="booking-section">
          <p>START WITH A CONVERSATION</p>

          <h2>Tell us a little about yourself.</h2>

          <p>
            We’ll use this information to make our conversation more useful
            and understand where VAnia might be able to help.
          </p>

          {/* Booking Form */}
          <form
            className="consultation-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Your name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">
                  Company
                </label>

                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="email">
                  Email address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone number
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Start with country code"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="support">
                What would you like support with?
              </label>

              <select
                id="support"
                name="support"
                value={formData.support}
                onChange={handleChange}
              >
                <option value="">
                  Select an option
                </option>

                <option value="executive-support">
                  Executive support
                </option>

                <option value="administrative-support">
                  Administrative support
                </option>

                <option value="operations">
                  Business & operations
                </option>

                <option value="communication">
                  Client & communication
                </option>

                <option value="research">
                  Research & project support
                </option>

                <option value="other">
                  Something else
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Tell us a little more
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="What is currently taking up more of your time than it should?"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Status message */}
            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

            <button
              type="submit"
              className="booking-button"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Sending..."
                : "Book a Consultation"}
            </button>

          </form>
        </section>

      </main>
    </>
  );
};

export default BookConsultation;