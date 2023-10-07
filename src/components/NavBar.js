import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import navIcon1 from '../img/instagram.png';
import navIcon2 from '../img/facebook.png';
import navIcon3 from '../img/envelope-o.png';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = value => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="/">
            <p className="logo">MR</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-autochange">
              <Nav.Link
                href="#sobre"
                className={
                  activeLink === 'sobre' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('sobre')}
              >
                Sobre
              </Nav.Link>
              <Nav.Link
                href="#serviços"
                className={
                  activeLink === 'serviços'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('serviços')}
              >
                Serviços
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === 'project'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://instagram.com/marina_rodrigues00?igshid=NTc4MTIwNjQ2YQ=="
                  className="social-link"
                >
                  <img src={navIcon1} alt="icon" />
                </a>
                <a
                  href="https://www.facebook.com/marina.m.rodrigues.1"
                  className="social-link"
                >
                  <img src={navIcon2} alt="icon" />
                </a>
                <a
                  href="mailto:marina.1998@live.com.pt"
                  className="social-link"
                >
                  <img src={navIcon3} alt="icon" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Vamos conectar</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
