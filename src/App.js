import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import  Home from "./Home"
import { Routes, Route , Navigate } from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () =>{
  return (
    <>

    <Navbar />
    <Routes>
      <Route exact path="/" element = {<Home />} />
      <Route exact path="/about" element = {<About />} />
      <Route exact path="/services" element = {<Services />} />
      <Route exact path="/contact" element = {<Contact />} />
      <Route path= "*" element={<Navigate to = "/ " />} />
    </Routes>

    <Footer />
    </>
  );
};

export default App;

