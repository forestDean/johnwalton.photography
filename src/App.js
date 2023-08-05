import React from "react";
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/router'
import Container from 'react-bootstrap/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Legal from './components/Legal/Legal';



const App = () => {
  return (
      <BrowserRouter>
        <Container className="mt-5 px-0">
          <Header />
          <Router />
          <Footer />         
          <Legal />        
        </Container>
      </BrowserRouter>
    );
  }

export default App

