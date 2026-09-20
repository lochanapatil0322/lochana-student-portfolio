import { useState } from "react";
import { profile } from "../data/portfolioData";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="page-panel contact-layout">
      <div>
        <p className="section-kicker">CONTACT</p>
        <h1>Let's connect.</h1>
        <p className="lead-text">I am always open to learning opportunities, student collaborations, and feedback on my work.</p>
        <div className="contact-list">
          <p><strong>Email</strong><span>{profile.email}</span></p>
          <p><strong>GitHub</strong><span>{profile.github}</span></p>
          <p><strong>LinkedIn</strong><span>{profile.linkedin}</span></p>
          <p><strong>Location</strong><span>{profile.location}</span></p>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send a message</h2>
        <label>Name<input required type="text" placeholder="Your name" /></label>
        <label>Email<input required type="email" placeholder="you@example.com" /></label>
        <label>Message<textarea required rows="5" placeholder="Write your message"></textarea></label>
        <button className="primary-button" type="submit">Send message</button>
        {submitted && <p className="success-message">Thank you! Your message has been recorded for this demo.</p>}
      </form>
    </section>
  );
}

export default Contact;
