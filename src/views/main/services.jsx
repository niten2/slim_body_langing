import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

export default class Contacts extends Component {

  render() {
    return renderView()
  }

}

const renderView = () => (
  <Col xs={12} className="center">

    <Col className="plus">

      <Col xs={3}>
        <Col xs={6}>
          <img src="images/spa-main-img-4.png" />
        </Col>
        <Col xs={6}>
          Вы похудеете
          на 10 и более
          килограмм
        </Col>
      </Col>

      <Col xs={3}>
        <Col xs={6}>
          <img src="images/spa-main-img-3.png" />
        </Col>
        <Col xs={6}>
          Сможете носить
          облегающую
          одежду
        </Col>
      </Col>

      <Col xs={3}>
        <Col xs={6}>
          <img src="images/spa-main-img-2.png" />
        </Col>
        <Col xs={6}>
          Избавитесь от
          комплексов,
          связанных с весом
        </Col>
      </Col>

      <Col xs={3}>
        <Col xs={6}>
          <img src="images/spa-main-img-1.png" />
        </Col>
        <Col xs={6}>
          Будете получать
          заслуженные
          комплименты!
        </Col>
      </Col>

    </Col>

    <Clearfix />

    <Col className="text-center">
      <h1 className="text-center"> Услуги салона </h1>

      - массаж (антицеллюлитный, медовый, баночный)
      <br />
      - кавитация,
      <br />
      - миостимуляция,
      <br />
      - прессотерапия,
      <br />
      - RF-лифтинг.
      <br />
    </Col>

  </Col>
)

