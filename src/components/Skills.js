import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="serviços">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Serviços</h2>
              <p>
                Poupa dinheiro e complicações. Particular, ENI ou empresa,{' '}
                <br /> verás as tuas dúvidas esclarecidas de forma simples e
                objetiva.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>Consultoria</h5>
                </div>
                <div className="item">
                  <h5>
                    Simulação <br /> de IRS
                  </h5>
                </div>
                <div className="item">
                  <h5>
                    Apoio <br /> Mensal
                  </h5>
                </div>
                <div className="item">
                  <h5>Outros</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
