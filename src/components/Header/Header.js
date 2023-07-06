import React from "react";
import "./Header.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
    return (
      <header className="header">
        <Row>
          <Col xs={12} className="text-center">        
              <span className="mt-5 text-muted">John Walton Photography</span>
          </Col>
        </Row>
      </header>
      );
    }
  
  export default Header