import React, { Component } from 'react';

import Paises from './Components/Paises';

class Header extends Component {
  render() {

    if (this.props.data) {
      for (let pais of this.props.data) {
         var name = pais.name_en;
         var name_fa = pais.name_fa;
         var flag = pais.flag;
         var fifa_code = pais.fifa_code;
         var groups = pais.groups;
         var id = pais.id;
         var flag_img = <li key={id}><img src={flag}/></li>
      }
      console.log(this.props.data)
      var name = this.props.data[0].name_en;
      var name_fa = this.props.data[0].name_fa;
      var flag = this.props.data[0].flag;
      var fifa_code = this.props.data[0].fifa_code;
      var groups = this.props.data[0].groups;
      var id = this.props.data[0].id;
      var flag_img = <li key={id}><img src={flag}/></li>
    }

    return (
      <header id="home">

         <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               {/* <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Resume - Experience</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
            </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h2 className="responsive-headline">{name_fa}</h2>
               <h1 className="responsive-headline">{name}.</h1>
               <ul className="social">
                  {flag_img}
               </ul>
               <h4>{fifa_code}</h4>
               <hr/>
               <h3>Pertenezco al <span>Grupo {groups}</span>.</h3>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
    );
  }
}

export default Header;
