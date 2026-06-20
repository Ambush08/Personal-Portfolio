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
                            <label htmlFor="">First Name</label>
                            <input type="text" placeholder="Enter your first name..." />
                        </div>

                        <div className="form-field">
                            <label htmlFor="">Last Name</label>
                            <input type="text" placeholder="Enter your last name..." required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder="Enter your email..." required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="">Phone Number</label>
                            <input type="number" placeholder="Enter your phone number..." required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" placeholder="Type your message here..." required ></textarea>
                        </div>
                    </form>
                    <button className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </div>
        </section>
    )
}