import {Link} from 'react-scroll';
import './Footer.css';

export function Footer () {
    return(
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="logo footer-logo">
                    <Link 
                        to="hero"
                        smooth={true}
                        spy={true}
                        duration={1000}>
                            Ambush.<span className="logo-highlight">Dev</span>
                    </Link>
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
                            <a href="https://x.com/cloutchaser08" target="_blank">
                                <i class="fa-brands fa-x-twitter"></i>
                            </a>
                        </li>
                        <li className="footer-social-link">
                            <a href="https://github.com/Ambush08" target="_blank">
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li className="footer-social-link">
                            <a href="https://www.linkedin.com/in/warren-ambuga-0718693a3/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bbs5ip%2BkVSs2o8b58rt%2Fm8w%3D%3D" target="_blank">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="footer-social-link">
                            <a href="https://www.instagram.com/ambushwarren/" target="_blank">
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