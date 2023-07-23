import React from "react";
import "./Header.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/graphics/jw_button_grey30.png';
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Header = () => {
    return (
      <header className="header">
        <Row>
          <Col xs={12} className="text-center"> 
            <div className="logo float-start">
              <a href="https://www.linkedin.com/in/forestdean/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="socialIcon" />
              </a>
              <a href="https://github.com/forestDean" target="_blank" rel="noopener noreferrer">
                <FaGithub className="socialIcon" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="socialIcon" />
              </a>
              <a href="mailto:example@example.com">
                <FaEnvelope className="socialIcon" />
              </a>
          </div>
              {/* <span className="mt-5 text-muted">John Walton Photography</span> */}
              <img src={logo} alt="next" className="logo float-end"/>
          </Col>
        </Row>
      </header>
      );
    }
  
  export default Header