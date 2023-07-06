import React from "react";
import "./Header.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/graphics/jw_button_grey30.png';

const Header = () => {
    return (
      <header className="header">
        <Row>
          <Col xs={12} className="text-center">        
              {/* <span className="mt-5 text-muted">John Walton Photography</span> */}
              <img src={logo} alt="next" className="logo float-end"/>
          </Col>
        </Row>
      </header>
      );
    }
  
  export default Header