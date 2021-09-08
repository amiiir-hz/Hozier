import React, { Component } from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import ContactForm from "./ContactForm";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default Contact;
