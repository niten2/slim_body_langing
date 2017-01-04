import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

export default class Contacts extends Component {

  render() {
    return renderView()
  }

}

const renderView = () => (
  <Col xs={12} className="background-green ">

    <Col className="custom-footer">
      <h3>
        Оставить заявку
        на бесплатное посещение
      </h3>

      <input
        value={"dsfsd"}
        placeholder="ddfssdf"
        className="form-control"
      />

      <input
        value={"dsfsd"}
        placeholder="ddfssdf"
        className="form-control"
      />

      <Clearfix />

      <button>
        Записаться
      </button>
    </Col>

  </Col>
)

