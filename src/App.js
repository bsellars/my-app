import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/about";
import Stream from "./pages/Stream";
import Links from "./pages/Links";
import Contact from "./pages/Contact";
import Funders from "./pages/funders";
import { FooterContainer } from "./containers/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Stream" element={<Stream />} />
        <Route path="/Links" element={<Links />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/funders" element={<Funders />} />
      </Routes>
      <FooterContainer />
    </Router>
  );
}

export default App;
