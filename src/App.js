import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact'
import Prints from './pages/Prints/Prints'
// import Wrapper from './components/Wrapper';
import Container from 'react-bootstrap/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Legal from './components/Legal/Legal';



const App = () => {
  return (
      <Router>
        <Container className="mt-5 px-0">
          <Header />
          {/* <Wrapper> */}
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/prints" element={<Prints/>} /> 
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          {/* </Wrapper>  */}
          <Footer />         
          <Legal />        
        </Container>
      </Router>
    );
  }

export default App

