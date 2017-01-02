import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

export default class Main extends Component {

  render() {
    return renderView()
  }

}

const renderView = () => (
  <Col xs={12}>
    <h1 className="text-center"> Хочешь похудеть? </h1>

    <Col xs={6}>
      Оставь заявку прямо сейчас и получи бесплатное посещение

      <br />

      <Button className="block block-button is-button" id="#block-new7">
        Оставь заявку
      </Button>
    </Col>


    <Col xs={6}>
      <img className="main-image" src="images/main.png" />
    </Col>

  </Col>
)

