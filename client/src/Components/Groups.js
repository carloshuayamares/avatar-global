import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Groups extends Component {
  render() {

    const _groups = {
        groupA: [<span>Grupo A</span>, ],
        groupB: [<span>Grupo B</span>, ],
        groupC: [<span>Grupo C</span>, ],
        groupD: [<span>Grupo D</span>, ],
        groupE: [<span>Grupo E</span>, ],
        groupF: [<span>Grupo F</span>, ],
        groupG: [<span>Grupo G</span>, ],
        groupH: [<span>Grupo H</span>, ],
    }

    const groupsLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

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
                for (let letter of groupsLetter) {
                    if (letter === groups) {
                        _groups[`group${letter}`].push(
                            <div>
                                <ul>{flag_img}</ul>
                                <h4>{fifa_code}</h4>
                            </div>
                        )
                        continue
                    }
                }
            }
         }
       }

    return (

        <section className="groups" id="groups">

            <div>
                <br></br>
                <h1>
                    Se muestra todos los grupos del mundial.
                </h1>
            </div>
            <Container>
                <Row>
                    <Col sm={3}>{_groups.groupA} <hr/> </Col>
                    <Col sm={3}>{_groups.groupB} <hr/> </Col>
                    <Col sm={3}>{_groups.groupC} <hr/> </Col>
                    <Col sm={3}>{_groups.groupD} <hr/> </Col>
                </Row>
                <Row>
                    <Col sm={3}>{_groups.groupE} <hr/> </Col>
                    <Col sm={3}>{_groups.groupF} <hr/> </Col>
                    <Col sm={3}>{_groups.groupG} <hr/> </Col>
                    <Col sm={3}>{_groups.groupH} <hr/> </Col>
                </Row>

            </Container>
        </section>
    );
  }
}

export default Groups;
