import React from "react";
import "./Footer.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Moment from 'react-moment';
import myButton from '../../assets/graphics/prevNextButton30.png';

const Footer = () => {
    return (
      <footer className="">
        <Row>
          <Col xs={12} className="text-center position-relative pt-3"> 
            <img src={myButton} alt="previous" className="control float-start swiper-button-prev"/>        
            <small className="text-muted">©<Moment format="YYYY" /> John Walton</small>
            <img src={myButton} alt="next" className=" control float-end swiper-button-next"/>
          </Col>
        </Row>
      </footer>
      );
    }
  
  export default Footer