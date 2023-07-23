import React from "react";
import "./Home.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import overlay from '../../assets/graphics/jw_button_grey30.png';

const Home = () => {
  return (  
      <main>
        <Row className="homepage">
          <Col xs={6} className="square position-relative" id="galleryHome">
            <div id="squareOverlay" className="squareOverlay position-absolute top-0 start-0"></div>
            <div id="slideshowHome"></div>
          </Col>
          <Col xs={6} className="square" id="contentMenu">
            <div id="contentMenu">
              <ul class="contents">
              <li id=""><a href="./pages/about.html">about</a></li>
              <li id=""><a href="assets/images/epping-forest/gallery.html">epping forest</a></li>
              <li id=""><a href="assets/images/lea-valley/gallery.html">lea valley</a></li>
              {/* <li id=""><a href="#">forest of dean</a></li> */}
              <li id=""><a href="assets/images/elsewhere/gallery.html">elsewhere</a></li>
              {/* <li id=""><a href="#">commercial</a></li> */}
              {/* <li id="">social</li> */}
              <li id=""><a href="./pages/prints.html">prints</a></li>
              <li id=""><a href="./pages/contact.html">contact</a></li>    
              </ul>
            </div>  
          </Col>


        </Row>
      </main>
    );
  }

export default Home

