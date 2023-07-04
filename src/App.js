import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact'
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Wrapper from './components/Wrapper';
import Container from 'react-bootstrap/Container';


const App = () => {
  return (
      <Router>
        <Container>
          {/* <Header />
          <Wrapper> */}
            <Routes>
              <Route path="/" element={<Home/>} />
              {/* <Route path="/about" element={<About/>} />
              <Route path="/prints" element={<Prints/>} /> 
              <Route path="/contact" element={<Contact/>} /> */}
            </Routes>
          {/* </Wrapper> 
          <Footer />         
          <Legal />         */}
        </Container>
      </Router>
    );
  }

export default App

