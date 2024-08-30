import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/website" element={<Home />} />
        <Route path="/website/about" element={<About />} />
        <Route path="/website/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;