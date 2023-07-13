import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './Component/Header';
import Projet from './Component/Pages/Projet';
import Home from './Component/Pages/Home';
import Footer from './Component/Footer';
import Contact from './Component/Pages/Contact';
import Testimonial from './Component/Pages/Testimonial';
import './styles/global.css';
import './Component/Loading.css';
import StyleContext from './Component/Pages/StyleContext';
import ToggleSwitch from './Component/ToggleSwitch'; // Import the ToggleSwitch component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace 2000 with the actual duration of your loading
  }, []);

  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  return (
    <StyleContext.Provider value={{ isDark, changeTheme }}>
      <div>
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <div>
            <div className={`App ${isDark ? 'dark' : ''}`}> 
            <Router>
                <Header/>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projets" element={<Projet />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/testimonial" element={<Testimonial />} />
                </Routes>
              <div>
                <Footer className="Footer" />
              </div>
            </Router>
            </div>
          </div>
        )}
      </div>
    </StyleContext.Provider>
  );
}

export default App;
