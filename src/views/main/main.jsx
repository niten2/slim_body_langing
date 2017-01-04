import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

export default class Main extends Component {

  render() {
    return renderView()
  }

}

const renderView = () => (
  <Grid className="main">

    <Col xs={6}>
      <h1 className="text-center">
        Хотите иметь стройное тело?
      </h1>

      <h3 className="text-center">
        Оставьте заявку прямо сейчас и получите бесплатное посещение!
      </h3>

      <button>
        Записаться на бесплатное посещение
      </button>

    </Col>

    <Col xs={6}>
      <img src="images/main.png" />
    </Col>

  </Grid>
)

