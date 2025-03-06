import React from 'react'
import WebSocketSection from './components/websocket'
import Navbar from './components/navbar'
import Bio from './components/bio'
import HobbySection from './components/hobby-section'
import ContactSection from './components/contact-section'
import WeatherSection from './components/weather-section'
import './App.css'
import { useSelector } from 'react-redux'
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState, useRef } from 'react'


function App() {
    const componentToMount = useSelector((state: any) => state.box.value)
    const [isActive, setActive] = useState(false)

    const componentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isActive) {
            componentRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            return
        }
    }, [isActive]);

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
          <footer className="container-fluid" style={{backgroundColor: "rgb(33, 37, 41)", color: "whitesmoke", marginTop: "10px", height: "100%"}}>
              <div className="container-lg">
                  <div className="row justify-content-center" style={{marginBottom: "10px"}}>
                      <button className="col-3 btn btn-outline-info" onClick={() => setActive(!isActive)}>
                          <h2 id="contact-section">Contattami</h2>
                      </button>
                  </div>

                  {/* Contact Form */}
                  <AnimatePresence>
                      {isActive && <motion.div ref={componentRef} initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0}} transition={{ease: "easeOut", duration: 0.5}}>
                          <ContactSection />
                      </motion.div>}
                  </AnimatePresence>

              </div>
          </footer>

      </div>
);
}

export default App;
