import {ContactForm} from './ContactForm';
import './Contacts.css';

export function Contacts () {
    return(
        <section id="contact" className="contacts">
            <div className="container contacts-container">
                <div className="contact-header">
                    <h3 className="contact-title">Get in Touch</h3>
                    <h2 className="contact-info">Contact Me</h2>
                    <p className="contact-description">Get in touch with me through the contact form below</p>
                </div>

                <div className="contact-form">
                   <ContactForm /> 
                </div>
            </div>
        </section>
    )
}