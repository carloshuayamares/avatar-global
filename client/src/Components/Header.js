import React, { Component } from 'react';

class Header extends Component {
  render() {

   return (
      <header id="home">

         <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li className="current"><a className="smoothscroll" href="#equipos">All Teams</a></li>
               <li className="current"><a className="smoothscroll" href="#groups">Grupos</a></li>
               <li className="current"><a className="smoothscroll" href="#fixture">Fixture</a></li>

               {/* <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Resume - Experience</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
            </ul>

         </nav>
      </header>
    );
  }
}

export default Header;
