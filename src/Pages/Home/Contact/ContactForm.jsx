import { useForm, ValidationError } from '@formspree/react';
import './Contacts.css';

export function ContactForm () {
    const [state, handleSubmit] = useForm("mpqgwoyk");
        if (state.succeeded) {
        return <div>Your message has been sent</div>;
    }
    return(
        <form onSubmit={handleSubmit} className="contact-me-form">
                        <div className="form-field">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" id="firstname" name="firstname" placeholder="Enter your first name..." required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" id="lastname" name="lastname" placeholder="Enter your last name..." required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email..." required />
                            <ValidationError field="email" prefix="Email" errors={state.errors} />
                        </div>

                        <div className="form-field">
                            <label htmlFor="number">Phone Number</label>
                            <input type="tel" id="number" name="number" placeholder="Enter your phone number..." required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder="Type your message here..." required ></textarea>
                            <ValidationError field="message" prefix="message" errors={state.errors} />
                        </div>
                        <button type="submit" disabled={state.submitting} className="btn btn-primary contact-button">
                            {state.submitting ? "Sending..." : "Submit"}
                        </button>
                    </form>
    )
}