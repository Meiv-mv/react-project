import React from 'react';
import WebSocketSection from './components/websocket'
import Navbar from './components/navbar'
import Bio from './components/bio'
import HobbySection from './components/hobby-section'
import ContactSection from './components/contact-section'
import WeatherSection from './components/weather-section'
// import logo from './logo.svg';
import './App.css';


function App() {
  return (
      <div className="App">
          {/* Navigation Bar */}
          <Navbar/>

          {/* Main Section */}
          <main className="container-lg text-center" style={{marginTop: "56px"}}>
              <div className="row">
                  {/* Main Column */}
                  <div className="col-12 col-lg-8">
                      <div className="row g-lg-3">
                          {/* BIO */}
                          <Bio />

                          {/* Hobby Section */}
                          <HobbySection />
                      </div>

                  </div>

                  {/* Side Column */}
                  <div style={{color: "whitesmoke"}} className="col-12 col-lg-4">
                      <div className="row g-lg-3">
                          {/* Weather Section */}
                          <WeatherSection />

                          {/* Websocket */}
                          <WebSocketSection />
                      </div>
                  </div>


                  </div>
          </main>

          {/* Footer */}
          <footer className="container-fluid" style={{backgroundColor: "rgb(33, 37, 41)", color: "whitesmoke", marginTop: "10px"}}>
            {/* Contact Form */}
            <ContactSection />
          </footer>

      </div>
);
}

export default App;
