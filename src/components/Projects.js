import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projectos</h2>
                  <p className="project-text">
                    Nesta secção, pode ficar a conhecer-me melhor.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="second">Sobre mim</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Minha Abordagem</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="second">
                        <p className="project-text">
                          Olá! Meu nome é Marina Matos Rodrigues, sou
                          contabilista com mais de 5 anos de experiência na área
                          de contabilidade e tributação. Exerço minha atividade
                          com grande atenção aos detalhes, buscando auxiliar
                          empreendedores e empresas a alcançar transparência
                          financeira e sucesso. Meu objetivo é facilitar os
                          aspectos financeiros do seu negócio, fornecendo
                          serviços contábeis precisos e confiáveis. Acredito que
                          finanças bem geridas são a base do empreendedorismo
                          bem-sucedido.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p className="project-text">
                          Acredito profundamente em uma abordagem personalizada
                          e orientada ao cliente ao fornecer serviços contábeis.
                          Cada empresa é única, com suas próprias necessidades e
                          metas financeiras. Minha abordagem é centrada no
                          cliente e visa atender às demandas específicas de cada
                          negócio individualmente. Escuta Ativa e Entendimento
                          Profundo: Antes de propor qualquer solução, é
                          fundamental que eu compreenda plenamente as operações
                          e desafios únicos do seu negócio. Isso é alcançado
                          através de uma escuta ativa e um entendimento profundo
                          das suas metas financeiras e operacionais.
                          Customização de Soluções: Com base na análise e
                          entendimento abrangentes, desenvolvo soluções
                          personalizadas que se alinham perfeitamente com as
                          necessidades da sua empresa. Isso pode incluir a
                          otimização de processos contábeis, implementação de
                          sistemas eficientes de registro financeiro e sugestões
                          estratégicas para melhorar a saúde financeira da sua
                          organização. Transparência e Colaboração: Promovo uma
                          comunicação aberta e transparente durante todo o
                          processo. Encorajo a colaboração e valorizo a
                          contribuição dos meus clientes no desenvolvimento de
                          estratégias financeiras eficazes. É uma parceria em
                          que trabalhamos juntos para alcançar seus objetivos
                          financeiros e garantir o sucesso sustentável do seu
                          negócio. Acompanhamento Contínuo e Ajustes: O ambiente
                          empresarial está sempre mudando. Por isso, ofereço
                          acompanhamento contínuo e avaliações periódicas para
                          garantir que as estratégias implementadas estejam
                          alinhadas com o seu crescimento e as mudanças no
                          cenário financeiro. Estou sempre pronto para ajustar
                          as estratégias, conforme necessário, para garantir que
                          você esteja no caminho certo para o sucesso financeiro
                          duradouro.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
