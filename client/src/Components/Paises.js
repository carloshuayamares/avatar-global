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
            var flag_img = <li key={id}><img className='flag-h1' src={flag}/></li>
   
            if (id !== "0") {
                allFlags.push(
                    <Col sm={3}>
                        <div className='flags'>
                            <h2>{name} / {name_fa}</h2>
                            <ul>{flag_img}</ul>
                            <h4>{fifa_code}</h4>
                            <hr/>
                        </div>
                    </Col>
                )
            }
         }
       }

    return (
        <section className="equipos" id='equipos'>
            <Container>
                <br></br>
                <h1>Equipos que participaron en el mundial de futbol Qatar 2022</h1>
                <br></br>
                <Row>
                    {allFlags}
                </Row>

            </Container>
        </section>
    );
  }
}

export default Paises;
