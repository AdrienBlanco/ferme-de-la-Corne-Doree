import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./Contact.scss";

export default function Contact() {

    return (
        <section className="contact" id="Contact">
            <h2 className="contact__title">Contact</h2>
            <ContactForm />
        </section>
    );
}