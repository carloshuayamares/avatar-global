import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Paises extends Component {
  render() {

    const allFlags = []

    if(this.props.data){
        for (let pais of this.props.data) {
            var name = pais.name_en;
            var name_fa = pais.name_fa;
            var flag = pais.flag;
            var fifa_code = pais.fifa_code;
            var groups = pais.groups;
            var id = pais.id;
            var flag_img = <li key={id}><img src={flag}/></li>
   
            if (id !== "0") {
                allFlags.push(
                    <Row>
                        <Col>
                            <div className="banner-text">
                                <h2 className="responsive-headline">{name_fa}</h2>
                                <h1 className="responsive-headline">{name}.</h1>
                                <h3>Pertenezco al <span>Grupo {groups}</span>.</h3>
                                <ul className="social">{flag_img}</ul>
                                <h4>{fifa_code}</h4>
                                <hr/>
                            </div>
                        </Col>
                    </Row>
                )
            }
         }
       }

    return (
        <section className="paises" id='equipos'>
            <Container>
                {allFlags}
            </Container>
        </section>
    );
  }
}

export default Paises;
