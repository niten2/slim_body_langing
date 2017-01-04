import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

export default class Main extends Component {

  render() {
    return renderView()
  }

}

const renderView = () => (
  <Col xs={12}>

    <Col xs={6}>
      <h1 className="text-center">
        Хочешь похудеть?
      </h1>

      <h3 className="text-center">
        Оставь заявку прямо сейчас и получи бесплатное посещение
      </h3>

      <br />
      <br />
      <br />
      <br />
      <br />
      <button className="custom-button">
        Записаться на бесплатное посещение
      </button>

    </Col>


    <Col xs={6}>
      <img className="main-image" src="images/main.png" />
    </Col>

  </Col>
)

