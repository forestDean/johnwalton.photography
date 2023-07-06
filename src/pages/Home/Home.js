import React from "react";
import "./Home.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (  
      <main>
        <Row className="homepage">
          <Col xs={6} className="square" id="galleryHome">
            <div id="squareOverlay"></div>
            <div id="slideshowHome"></div>
          </Col>
          <Col xs={6} className="square" id="contentMenu"></Col>


        </Row>
      </main>
    );
  }

export default Home

