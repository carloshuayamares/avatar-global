import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Groups extends Component {
  render() {

    const _groups = {
        groupA: [<br></br>, <h2><span>Grupo A</span></h2>, ],
        groupB: [<br></br>, <h2><span>Grupo B</span></h2>, ],
        groupC: [<br></br>, <h2><span>Grupo C</span></h2>, ],
        groupD: [<br></br>, <h2><span>Grupo D</span></h2>, ],
        groupE: [<br></br>, <h2><span>Grupo E</span></h2>, ],
        groupF: [<br></br>, <h2><span>Grupo F</span></h2>, ],
        groupG: [<br></br>, <h2><span>Grupo G</span></h2>, ],
        groupH: [<br></br>, <h2><span>Grupo H</span></h2>, ],
    }

    const groupsLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

    if(this.props.data){
        for (let pais of this.props.data) {
            var name = pais.name_en;
            // var name_fa = pais.name_fa;
            var flag = pais.flag;
            var fifa_code = pais.fifa_code;
            var groups = pais.groups;
            var id = pais.id;
            var flag_img = <li><img className='flag-h2' src={flag}/></li>
   
            if (id !== "0") {
                for (let letter of groupsLetter) {
                    if (letter === groups) {
                        _groups[`group${letter}`].push(
                            <div className='group-paises-in'>
                                <h4>{fifa_code}</h4>
                                <ul>{flag_img}</ul>
                                <h5>{name}</h5>
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
                    <Col sm={3} className='group-paises' >{_groups.groupA} <br></br></Col>
                    <Col sm={3} className='group-paises' >{_groups.groupB} <br></br></Col>
                    <Col sm={3} className='group-paises' >{_groups.groupC} <br></br></Col>
                    <Col sm={3} className='group-paises' >{_groups.groupD} <br></br></Col>
                </Row>
                <Row>
                    <Col sm={3} className='group-paises' >{_groups.groupE} <br></br></Col>
                    <Col sm={3} className='group-paises' >{_groups.groupF} <br></br></Col>
                    <Col sm={3} className='group-paises' >{_groups.groupG} <br></br></Col>
                    <Col sm={3} className='group-paises' >{_groups.groupH} <br></br></Col>
                </Row>

            </Container>
        </section>
    );
  }
}

export default Groups;
