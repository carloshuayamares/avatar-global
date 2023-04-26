import React, { Component } from "react";
import ReactGA from 'react-ga';
import $ from 'jquery';

import "./App.css";

import Header from './Components/Header';
import Paises from './Components/Paises';
import Groups from './Components/Groups';
import Fixture from './Components/Fixture';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
      mensaje: '',
      teams: [],
      allTeams: {},
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getAllTeams(){
    $.ajax({
      url:'/allTeams.json',
      dataType:'json',
      cache: false,
      success: function(data){
        console.log(data.data)
        this.setState({allTeams: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }


  // getDataFixture(){
  //   $.ajax({
  //     type: 'get',
  //     url:'http://localhost:8000/getAllTeams',
  //     success: function(response) {
  //       console.log(response.data.data)
  //       this.setState({teams: `${response.data}`});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.log(err);
  //       alert(err);
  //     },
  //   });
  // }

  async componentDidMount(){
    // this.getDataFixture();
    this.getAllTeams();
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.mensaje}</h1>
        <Header data={this.state.allTeams.data}/>
        <Paises data={this.state.allTeams.data}/>
        <Groups data={this.state.allTeams.data}/>
        <Fixture data={this.state.allTeams.data}/>


        {/* <About data={this.state.resumeData.main}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Footer data={this.state.resumeData.main}/> */}
      </div>
    );
  }
}


export default App