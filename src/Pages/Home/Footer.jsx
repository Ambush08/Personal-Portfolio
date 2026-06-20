import './Footer.css';

export function Footer () {
    return(
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="logo footer-logo">
                    Ambush.<span className="logo-highlight">Dev</span>
                </div>

                <div className="footer-nav">
                    <ul className="footer-nav-list">
                        <li className="footer-nav-link">Home</li>
                        <li className="footer-nav-link">About Me</li>
                        <li className="footer-nav-link">Portfolio</li>
                        <li className="footer-nav-link">Skills</li>
                        <li className="footer-nav-link">Testimonial</li>
                        <li className="footer-nav-link">Contacts</li>
                    </ul>
                </div>

                <div className="footer-socials">
                    <ul className="footer-social-list">
                        <li className="footer-social-link">
                            <a href="">
                                <i class="fa-brands fa-x-twitter"></i>
                            </a>
                        </li>
                        <li className="footer-social-link">
                            <a href="">
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li className="footer-social-link">
                            <a href="">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="footer-social-link">
                            <a href="">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className="footer-text">
                <p>&copy; 2026 Ambush.Dev. All rights reserved</p>
            </div>
        </footer>
    )
}