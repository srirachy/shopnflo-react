import React from "react";
import { Routes, Route } from "react-router-dom";
import NaviBar from "./components/NaviBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Stores from "./pages/Stores";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./utils/style.css";

const App = () => {
  return (
    <>
      <NaviBar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
