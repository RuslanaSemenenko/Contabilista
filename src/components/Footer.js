import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../img/instagram.png';
import navIcon2 from '../img/linkedin2.png';
import navIcon3 from '../img/github.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col size={12} sm={6}>
            <p className="footer-logo">AS</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/_katotochkaaa_/?igshid=NTc4MTIwNjQ2YQ%3D%3D">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.linkedin.com/in/ruslana-semenenko/">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://github.com/RuslanaSemenenko">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p className="footer-text">
              Direitos de autor 2023. Todos os direitos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
