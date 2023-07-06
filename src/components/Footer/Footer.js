import React from "react";
import "./Footer.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Moment from 'react-moment';

const Footer = () => {
    return (
      <footer className="">
        <Row>
          <Col xs={12} className="text-center position-relative pt-3">         
            <small className="text-muted">©<Moment format="YYYY" /> John Walton</small>

          </Col>
        </Row>
      </footer>
      );
    }
  
  export default Footer