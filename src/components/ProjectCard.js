import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={4} md={4}>
      <a href={url} target="_blank" rel="noreferrer" className="proj-link">
        <div className="proj-imgbx">
        </div>
      </a>
    </Col>
  );
};
