import React from 'react'
import WebSocketSection from './components/websocket'
import Navbar from './components/navbar'
import Bio from './components/bio'
import HobbySection from './components/hobby-section'
import ContactSection from './components/contact-section'
import WeatherSection from './components/weather-section'
import './App.css'
import { useSelector } from 'react-redux'


function App() {
    const componentToMount = useSelector((state: any) => state.box.value)

  return (
      <div className="App">
          {/* Navigation Bar */}
          <Navbar />

          {/* Main Section */}
          <main className="container-lg text-center" style={{marginTop: "56px"}}>
              <div className="row">

                  {/* BIO */}
                  {componentToMount === 0 && <Bio/>}

                  {/* Hobby Section */}
                  {componentToMount === 1 && <HobbySection/>}

                  {/* Weather Section */}
                  {componentToMount === 2 && <WeatherSection/>}

                  {/* Websocket */}
                  {componentToMount === 3 && <WebSocketSection/>}

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
