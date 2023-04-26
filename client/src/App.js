import React, { Component } from "react";
import ReactGA from 'react-ga';
import $ from 'jquery';

import "./App.css";

import Header from './Components/Header';
import Paises from './Components/Paises';
import Groups from './Components/Groups';
import Fixture from './Components/Fixture';
import Footer from './Components/Footer';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      allTeams: {},
      matches: {},
      resumeData: {},
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  getAllTeams(){
    $.ajax({
      url:'/allTeams.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({allTeams: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  getAllMatches(){
    $.ajax({
      url:'/matches.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({matches: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  async componentDidMount(){
    this.getResumeData();
    this.getAllTeams();
    this.getAllMatches();
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.mensaje}</h1>
        <Header data={this.state.allTeams.data}/>
        <Paises data={this.state.allTeams.data}/>
        <Groups data={this.state.allTeams.data}/>
        <Fixture data={this.state.matches.data}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}


export default App