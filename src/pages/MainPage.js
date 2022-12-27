/* eslint-disable */
import MainCard from '../components/MainCard';
import TitleContent from '../components/TitleContent';
import { Container, Row, Col } from 'react-bootstrap';

import '../css/mainContainer.css';

function MainPage() {
  return (
    <div className="mainContainer">
      <TitleContent></TitleContent>
      <Container>
        <Row>
          <Col>
            <MainCard></MainCard>
          </Col>
          <Col>
            <MainCard></MainCard>
          </Col>
          <Col>
            <MainCard></MainCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default MainPage;
