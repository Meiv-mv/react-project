import React from 'react';
import { useEffect, useState } from 'react'
import WebSocketSection from './components/websocket'
import Navbar from './components/navbar'
import Bio from './components/bio'
import HobbySection from './components/hobby-section'
import ContactSection from './components/contact-section'
import WeatherSection from './components/weather-section'
import './App.css';


function App() {
    const [box, setBox] = useState<number>(0);

    function handleBoxChange(boxNumber: number) {
        setBox(boxNumber)
    }

  return (
      <div className="App">
          {/* Navigation Bar */}
          <Navbar changeComponent={handleBoxChange} box={box} />

          {/* Main Section */}
          <main className="container-lg text-center" style={{marginTop: "56px"}}>
              <div className="row">

                  {/* BIO */}
                  {box === 0 && <Bio/>}

                  {/* Hobby Section */}
                  {box === 1 && <HobbySection/>}

                  {/* Weather Section */}
                  {box === 2 && <WeatherSection/>}

                  {/* Websocket */}
                  {box === 3 && <WebSocketSection/>}

                  </div>
          </main>

          {/* Footer */}
          <footer className="container-fluid" style={{backgroundColor: "rgb(33, 37, 41)", color: "whitesmoke", marginTop: "10px", height: "300px"}}>
              <div className="container-lg">
                  {/* Contact Form */}
                  <ContactSection />
              </div>
          </footer>

      </div>
);
}

export default App;
