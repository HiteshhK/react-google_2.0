import React, { useState } from 'react';
import './style.css';
import { Footer, Navbar, Routes } from './components';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-500">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}
