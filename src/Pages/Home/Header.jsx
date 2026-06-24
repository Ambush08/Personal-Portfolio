import {Link} from 'react-scroll';
import {useState, useEffect} from 'react';
import './Header.css';

export function Header () {

    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 768) {
                closeMenu();
            };
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return(
        <header className="header-nav">
            <nav className={`navbar ${navActive? 'active' : ''}`}>
                <div className="logo">
                    <Link 
                        to="hero"
                        smooth={true}
                        spy={true}
                        duration={1000}>
                            Ambush.<span className="logo-highlight">Dev</span>
                    </Link>
                </div>

                <button className="menu-btn" onClick={toggleNav}>
                    {navActive? "✕" : "☰"}
                </button>

                <ul className={`nav-links ${navActive ? 'active' : ''}`}>
                    <li className="nav-list">
                        <Link 
                                to="hero" 
                                onClick={closeMenu}
                                className="nav-link"
                                smooth={true}
                                spy={true}
                                offset={-80}
                                duration={500}
                                activeClass="active">
                                    Home
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link 
                            to="about" 
                            onClick={closeMenu}
                            className="nav-link"
                            smooth={true}
                            spy={true}
                            offset={-80}
                            duration={500}
                            activeClass="active">
                                About Me
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link 
                            to="projects" 
                            className="nav-link"
                            onClick={closeMenu}
                            smooth={true}
                            spy={true}
                            offset={-80}
                            duration={500}
                            activeClass="active">
                                Portfolio
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link 
                            to="skills" 
                            onClick={closeMenu}
                            className="nav-link"
                            smooth={true}
                            spy={true}
                            offset={-80}
                            duration={500}
                            activeClass="active">
                                Skills
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link 
                            to="testimonie" 
                            onClick={closeMenu}
                            className="nav-link"
                            smooth={true}
                            spy={true}
                            offset={-80}
                            duration={500}
                            activeClass="active">
                                Testimonial
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link 
                            to="contact" 
                            onClick={closeMenu}
                            className="nav-link"
                            smooth={true}
                            spy={true}
                            offset={-90}
                            duration={500}
                            activeClass="active">
                                Contact
                        </Link>
                    </li>
                </ul>

                <Link 
                    to="contact" 
                    className="btn btn-secondary contact-btn"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-90}>
                        Contact Me
                </Link>
            </nav>
        </header>
    )
}