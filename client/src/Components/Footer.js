import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks = this.props.data.social.map(function(network){
        return <li key={network.name}><a target="_blank" href={network.url}><i className={network.className}></i></a></li>
      })
      var { name, email } = this.props.data
    }

    return (
      <footer id='footer'>

        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
                {networks}
            </ul>
            <ul className="copyright">
                <li>&copy; Copyright 2023 {name}</li>
                <li>eMail: <a href={'mailto:'+ email } target="_blank" >{email}</a></li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
