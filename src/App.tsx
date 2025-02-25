import React from 'react';
import WebSocketSection from './components/websocket'
import Navbar from './components/navbar'
import Bio from './components/bio'
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
      <div className="App">

          <Navbar/>

          <main className="container-lg text-center" style={{marginTop: "56px"}}>
              <div className="row">
                  {/* Main Column */}
                  <div className="col-12 col-lg-8">
                      {/* BIO */}
                      <Bio />
                  </div>

                  {/* Side Column */}
                  <div style={{color: "whitesmoke"}} className="col-12 col-lg-4">

                  </div>


                  </div>
          </main>
      </div>
);
}

export default App;
