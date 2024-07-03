// app/components/ContactForm.jsx

import React from "react";

export default function ContactForm() {
  return (
    <div className="form-container">
      <form method="post" action="/contact" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Message</label>
          <textarea id="comments" name="comments"></textarea>
        </div>
        <button type="submit" className="submit-button">Submit message</button>
      </form>
    </div>
  );
}
