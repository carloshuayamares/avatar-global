import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Groups extends Component {
  render() {

    const _matches = []
    let _groups = {}


    if (this.props.data) {

        const rondas = []
        for (let match of this.props.data) if (!rondas.includes(match.group)) {
            rondas.push(match.group)
        }

        for (let space of rondas) _groups[`${space}`] = [<br></br>, <h2><span>Ronda {space}</span></h2>,]
        
        for (let match of this.props.data) {

            let { home_flag, away_flag } = match
            let { home_team_en, away_team_en } = match
            let { home_score, away_score } = match
            let { local_date } = match
            let { group, id } = match

            let homeFlag_img = <li><img className='flag-h3' src={home_flag}/></li>
            let awayFlag_img = <li><img className='flag-h3' src={away_flag}/></li>

            for (let level of rondas) {
                if (level === group) {
                    _groups[`${level}`].push(
                        <div id={level + id} className={level}>
                            <Row className='level-cup'>
                                <Col sm={4}></Col>
                                <Col sm={1}> <br></br><ul>{homeFlag_img}</ul><h4>{home_team_en}</h4> </Col>
                                <Col sm={2}> <br></br><h4>{home_score} - {away_score}</h4><br></br> {local_date} </Col>
                                <Col sm={1}> <br></br><ul>{awayFlag_img}</ul><h4>{away_team_en}</h4> </Col>
                            </Row>
                            <br></br>
                        </div>
                    )
                    continue
                }

            }
        }

        for (let lvl of rondas) {
            _matches.push(
                <Row>
                    <div id={"group" + lvl}>{_groups[lvl]}</div>
                </Row>
            )
        }
    }

    return (

        <section className="fixture" id="fixture">
            <div>
                <h1>
                    Se muestra los resultados de todas las fases.
                </h1>
            </div>
            <Container>
                {_matches}
            </Container>
        </section>
    );
  }
}

export default Groups;
