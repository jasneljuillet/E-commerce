import React, { Component } from 'react'
import './App.css';
import Typical from 'react-typical';

function App() {
 
  return (
    <>
        <div className="container navbar">
            <header>
                <div>
                  <p className="logo">Jasnel</p>
                </div>
               <nav>
                 <ul>
                   <li><a href="">Github</a></li>
                   <li><a href="">Instagram</a></li>
                   <li><a href="">Facebook</a></li>
                   <li className="small"><a href="mailto:jasnel.services@gmail.com">Contact me</a></li>
                 </ul>
               </nav>
            </header>
        </div>

        <div className="main main-info-section">
          <div className="text">
         
            <h1>           
              <Typical
                  steps={['Hello, i\'m Jasnel Web Developer', 1000, ' Frontend And Backend ', 500]}
                  loop={Infinity}
                  wrapper="h3"
                />
            </h1> 
            <p>Mongo Db / Express / React / Node</p>
            <a href="mailto:jasnel.services@gmail.com">Contact me</a>
          </div>
          <div className="profil-image">
            <img src="index.png" className="img" alt="Jasnel identification"/>
            <p>
                   My name is Jasnel JUILLET and I am a web developer, I'm currently based in Haiti, 
                  Delmas 32. My main focus lies on the front-end, JavaScript and React development
          </p>
          
          <p>
            <strong>Freecodecamp / Udemy / Sololearn</strong><br></br>
              in these platforms I have received good understanding,
              individual and large group practice and certificates held in these areas.
          </p>
          </div>
         
        </div>
        
        <footer>
          <p>  Copyrights {new Date().getFullYear()} All Rights Reserved By Jasnel JUILLET</p>
        </footer>
</>
  );
}


    
export default App;
