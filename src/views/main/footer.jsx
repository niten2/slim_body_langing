import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

export default class Contacts extends Component {

  render() {
    return renderView()
  }

}

const renderView = () => (
  <Col xs={12}>

    <br />
    <br />

    <Button className="button-center text-center">
      Оставить заявку
    </Button>

  </Col>
)

