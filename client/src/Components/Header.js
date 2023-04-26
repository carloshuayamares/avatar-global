import React, { Component } from 'react';

class Header extends Component {
  render() {

   return (
      <header id="home">

         <nav id="nav-wrap">

            {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a> */}

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li className="current"><a className="smoothscroll" href="#equipos">All Teams</a></li>
               <li className="current"><a className="smoothscroll" href="#groups">Grupos</a></li>
               <li className="current"><a className="smoothscroll" href="#fixture">Fixture 1FASE</a>
                  <ul>
                     <li className="current"><a className="smoothscroll" href="#groupA">Grupo A</a></li>
                     <li className="current"><a className="smoothscroll" href="#groupB">Grupo B</a></li>
                     <li className="current"><a className="smoothscroll" href="#groupC">Grupo C</a></li>
                     <li className="current"><a className="smoothscroll" href="#groupD">Grupo D</a></li>
                     <li className="current"><a className="smoothscroll" href="#groupE">Grupo E</a></li>
                     <li className="current"><a className="smoothscroll" href="#groupF">Grupo F</a></li>
                     <li className="current"><a className="smoothscroll" href="#groupG">Grupo G</a></li>
                     <li className="current"><a className="smoothscroll" href="#groupH">Grupo H</a></li>
                  </ul>
               </li>
               <li className="current"><a className="smoothscroll" href="#fixture">Fixture 2FASE</a>
                  <ul>
                     <li className="current"><a className="smoothscroll" href="#groupR16">R16</a></li>
                     <li className="current"><a className="smoothscroll" href="#groupQR">R8</a></li>
                     <li className="current"><a className="smoothscroll" href="#groupsemi">R4</a></li>
                     <li className="current"><a className="smoothscroll" href="#groupFIN">Final</a></li>
                  </ul>
               </li>
               <li className="current"><a className="smoothscroll" href="#footer">Contacto</a></li>
            </ul>

         </nav>
      </header>
    );
  }
}

export default Header;
