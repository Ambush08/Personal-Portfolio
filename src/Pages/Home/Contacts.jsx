import './Contacts.css';

export function Contacts () {
    return(
        <section id="contacts" className="contacts">
            <div className="container contacts-container">
                <div className="contact-header">
                    <h3 className="contact-title">Get in Touch</h3>
                    <h2 className="contact-info">Contact Me</h2>
                    <p className="contact-description">Get in touch with me through the contact form below</p>
                </div>

                <div className="contact-form">
                    <form action="" className="contact-me-form">
                        <div className="form-field">
                            <label htmlFor="name">First Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your first name..." required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="name">Last Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your last name..." required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email..." required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="number">Phone Number</label>
                            <input type="number" id="number" name="number" placeholder="Enter your phone number..." required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="message">Message</label>
                            <textarea name="" id="message" placeholder="Type your message here..." required ></textarea>
                        </div>
                        <button className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                    
                </div>
            </div>
        </section>
    )
}