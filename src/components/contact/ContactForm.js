import React, { Component } from "react";
import "../../sass/main.scss";

class ContactForm extends Component {
  render() {
    return (
      <section className="contact bg-first">
        <div className="container">
          <h2 className="contact-title heading-3">Contact Rachel</h2>
          <p className="contact-text">
            If you'd like Rachel to record with you on your next project, play
            at your next show, or lead worship at your church — you're in the
            right place. Also, if you just want to say "Hi" this is the right
            place for that too.
          </p>
          <div className="contact-forms">
            <input
              type="text"
              class="contact-form"
              placeholder="First Name"
              name="name"
            />
            <input type="text" class="contact-form" placeholder="Last Name" />
            <input
              type="text"
              class="contact-form"
              placeholder="E-mail Address"
            />
            <textarea
              class="contact-form"
              placeholder="Enter Your Message"
              name="message"
            ></textarea>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
