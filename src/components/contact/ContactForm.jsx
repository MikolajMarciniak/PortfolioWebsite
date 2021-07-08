import React from "react";

const ContactForm = ({}) => {
  return (
    <div>
      <h2>Do you have a question?</h2>
      <p>Leave me a message. I will happily answer all questions.</p>
      <form className="contact-form">
        <div className="inputs">
          <input
            type="text"
            name="email"
            id="email-input"
            placeholder="Email address"
          />
          <div className="invalid-feedback"></div>
        </div>
        <div className="inputs">
          <textarea
            type="text"
            name="desc"
            autoComplete="off"
            id="description-input"
            rows="3"
            placeholder="Your message"
          />
          <div className="invalid-feedback"></div>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
