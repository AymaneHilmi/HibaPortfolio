import './App.css';
import AOS from 'aos'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Navbar from './components/Navbar';
import React, { useEffect, useState, useRef } from 'react';
import AboutScreen from './Screens/AboutScreen';
import Confetti from "react-confetti";
import { cn } from "./lib/utils";
import { useEasterEgg } from "./context/EasterEggContext";
import Footer from "./components/footer";
import { SmoothCursor } from "./components/ui/smooth-cursor";
import EasterEggsScreen from "./Screens/EasterEggsScreen";
import NotFoundScreen from "./Screens/NotFoundScreen";
import ScrollToTop from "./components/ScrollToTop";
import ReadsScreen from './Screens/ReadsScreen';
import PhotographerScreen from './Screens/PhotographerScreen';

function App() {

  // --------------------------------
  //    Easter Egg #1 : Confettis
  // --------------------------------

  const { confettiActive } = useEasterEgg();

  return (
    <div className="flex flex-col bg-bgLight dark:bg-bgDark cursor-none w-full">
      <SmoothCursor />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/About" className="h-screen" element={<AboutScreen />} />
        <Route path="/easter-eggs" className="h-screen" element={<EasterEggsScreen />} />
        <Route path="/Reads" className="h-screen" element={<ReadsScreen />} />
        <Route path="/PhotographerPortfolio" className="h-screen" element={<PhotographerScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
      <Footer />

      {/* Confetti Easter Egg */}
      <Confetti
        numberOfPieces={confettiActive ? 200 : 0}
        width={window.innerWidth}
        height={window.innerHeight}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default App;
