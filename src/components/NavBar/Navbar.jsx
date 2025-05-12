import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faCogs, 
  faChevronDown, 
  faBriefcase, 
  faInfoCircle, 
  faEnvelope, 
  faSearch,
  faBullhorn,
  faCode,
  faPaintBrush,
  faPencilRuler,
  faGlobe,
  faHandshake,
  faMobileAlt,
  faRobot,
  faBrain,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import NewNavbar from '../../utils/SearchBar/NewNavBar'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <header>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <a href="/">
            <img src="../../../assets/images/logo.svg" alt="Cospixare Logo" />
            <span className="brand-text">
              Cospixare <span className="highlight">Technologies</span>
            </span>
          </a>
        </div>
        <ul className={`nav-links ${mobileMenuActive ? 'active' : ''}`}>
          <li style={{ '--i': 0 }}>
            <a href="/" className="nav-item">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>

          <li
            className={`dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
            style={{ '--i': 1 }}
            onMouseEnter={() => setActiveDropdown('service')}
            onMouseLeave={() => setActiveDropdown(null)}
          >

            {/* <button
              className="drop-btn"
              onClick={() => toggleDropdown('service')} 
              
            >  */}
             <a href="/service">
              <FontAwesomeIcon icon={faCogs} />Services <FontAwesomeIcon icon={faChevronDown} />
              </a>
            {/* </button> */}
            <div className="dropdown-content">
              <div className="mega-menu">
                <div className="menu-column">
                  <h3>Digital Solutions</h3>
                  <a href="/service/digitalmarketing_service">
                    <FontAwesomeIcon icon={faBullhorn} /> Digital Marketing & SEO
                  </a>
                  <a href="/service/software_service">
                    <FontAwesomeIcon icon={faCode} /> Custom Software Development
                  </a>
                </div>
                <div className="menu-column">
                  <h3>Design Services</h3>
                  <a href="/service/logo_service">
                    <FontAwesomeIcon icon={faPaintBrush} /> Logo Design
                  </a>
                  <a href="/service/uiux_service">
                    <FontAwesomeIcon icon={faPencilRuler} /> UX/UI Design
                  </a>
                </div>
                <div className="menu-column">
                  <h3>Web Solutions</h3>
                  <a href="/service/web_service">
                    <FontAwesomeIcon icon={faGlobe} /> Website Development
                  </a>
                  <a href="/service/cloud_service">
                    <FontAwesomeIcon icon={faHandshake} /> Cloud Solutions
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li 
            className={`dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
            style={{ '--i': 1 }}
            onMouseEnter={() => setActiveDropdown('course')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {/* <button
              className="drop-btn"
              onClick={() => toggleDropdown('course')}
            > */}
            <a href="/course">
              <FontAwesomeIcon icon={faBookOpen} /> Courses <FontAwesomeIcon icon={faChevronDown} />
            {/* </button> */}
            </a>
            <div className="dropdown-content">
              <div className="mega-menu2">
                <div className="menu-column">
                  <h3>Full Stack Development</h3>
                  <a href="/course/web-dev">
                    <FontAwesomeIcon icon={faCode} /> Web Development
                  </a>
                  <a href="/course/app">
                    <FontAwesomeIcon icon={faMobileAlt} /> App Development
                  </a>
                </div>
                <div className="menu-column">
                  <h3>AI & Data Science Programs</h3>
                  <a href="/course/ai">
                    <FontAwesomeIcon icon={faRobot} /> Artificial intelligence
                  </a>
                  <a href="/course/ml">
                    <FontAwesomeIcon icon={faBrain} /> Machine Learning
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li style={{ '--i': 2 }}>
            <a href="/career" className="nav-item">
              <FontAwesomeIcon icon={faBriefcase} /> Careers
            </a>
          </li>

          <li style={{ '--i': 3 }}>
            <a href="/about" className="nav-item">
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </a>
          </li>

          <li style={{ '--i': 4 }}>
            <a href="/contact" className="nav-item btn-contact">
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </a>
          </li>
        </ul>

        <NewNavbar />

        <div 
          className={`menu-toggle ${mobileMenuActive ? 'active' : ''}`} 
          id="mobile-menu" 
          aria-label="Toggle navigation menu"
          onClick={toggleMobileMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;