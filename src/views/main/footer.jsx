import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

export default class Contacts extends Component {

  render() {
    return renderView()
  }

}

const renderView = () => (
  <Col xs={12} className="background-green ">

    <Col className="footer">
      <h3>
        Оставить заявку
        на бесплатное посещение
      </h3>

      <input
        placeholder="Ваше Имя"
        className="form-control"
      />

      <input
        placeholder="Ваше Телефон"
        className="form-control"
      />

      <Clearfix />

      <button>
        Записаться
      </button>
    </Col>

  </Col>
)

