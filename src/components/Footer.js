import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../img/instagram.png';
import navIcon2 from '../img/facebook.png';
import navIcon3 from '../img/envelope-o.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col size={12} sm={6}>
            <p className="footer-logo">MR</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://instagram.com/marina_rodrigues00?igshid=NTc4MTIwNjQ2YQ==">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/marina.m.rodrigues.1">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="mailto:marina.1998@live.com.pt">
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
