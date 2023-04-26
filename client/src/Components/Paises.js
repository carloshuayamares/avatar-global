import React, { Component } from 'react';

class Paises extends Component {
  render() {

    if(this.props.data){
      console.log(this.props.data)
      var name = this.props.data.name_en;
      var name_fa = this.props.data.name_fa;
      var flag = this.props.data.flag;
      var fifa_code = this.props.data.fifa_code;
      var groups = this.props.data.groups;
      var id = this.props.data.id;
      var flag_img = <li key={id}><img src={flag}/></li>
    }

    return (

        <section className="paises">

            {/* <div className="row">

                <div className="twelve columns collapsed">

                    <h1>Check Out Some of My Works.</h1>

                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {projects}
                    </div>
                </div>
            </div> */}

            <div className="row banner">
                <div className="banner-text">
                    <h2 className="responsive-headline">{name_fa}</h2>
                    <h1 className="responsive-headline">{name}.</h1>
                    <ul className="social">{flag_img}</ul>
                    <h4>{fifa_code}</h4><hr/>
                    <h3>Pertenezco al <span>Grupo {groups}</span>.</h3>
                </div>
            </div>

        </section>
    );
  }
}

export default Paises;
