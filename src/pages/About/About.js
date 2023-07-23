import React from "react";
import "./About.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import overlay from '../../assets/graphics/jw_button_grey30.png';

const About = () => {
  return (  
      <main>
        <Row className="homepage">
          <Col xs={6} className="square position-relative" id="galleryHome">
            <div id="squareOverlay" className="squareOverlay position-absolute top-0 start-0"></div>
            <div id="slideshowHome"></div>
          </Col>
          <Col xs={6} className="square" id="contentMenu">
            <div id="contentMenu">
              About
            </div>  
          </Col>


        </Row>
      </main>
    );
  }

export default About

