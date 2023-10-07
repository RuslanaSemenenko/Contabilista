import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../img/conta-3.jpg';

export const Banner = () => {
  const [rotationIndex, setRotationIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const rotatingTexts = [''];

    const tick = () => {
      const i = rotationIndex % rotatingTexts.length;
      const fullText = rotatingTexts[i];

      if (isDeleting) {
        setCurrentText(prevText => fullText.substring(0, prevText.length - 1));
      } else {
        setCurrentText(prevText => fullText.substring(0, prevText.length + 1));
      }

      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setRotationIndex(prevRotationIndex => prevRotationIndex + 1);
        setTypingSpeed(500);
      }

      if (!isDeleting && currentText === fullText) {
        setIsDeleting(true);
        setTypingSpeed(period);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [currentText, isDeleting, rotationIndex, typingSpeed]);

  return (
    <section className="banner" id="sobre">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagLine">A Tua Contabilista!</span>
            <h1>
              Sou a Marina Matos Rodrigues.
              <span className="wrap">{currentText}</span>
            </h1>
            <p>
              Ajudo-te a tomar melhores decisões. Contabilidade e finanças não
              têm de ser um problema. A Tua Contabilista vai esclarecer todas as
              questões contabilísticas e fiscais para as quais precisas de
              resposta. Todos temos obrigações e impostos para pagar. Mas, por
              vezes, não é fácil dar conta do recado. Conta comigo para te
              apoiar nas questões fiscais e contabilísticas do teu negócio.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
