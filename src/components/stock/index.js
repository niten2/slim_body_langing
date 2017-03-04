import React, { PropTypes, Component } from 'react'

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import Form from "./form"
import "./index.scss"

export default class Contacts extends Component {

  state = {
    isClick: false,
  }

  handeShowForm = () => {
    this.setState({ isClick: true })
  }

  renderView() {
    return (
      <Row>
        <div className="col-sm-6 align-self-center">
          <img src="static/images/stock/bomb.jpg" />
        </div>

        <div className="offer col-sm-6 align-self-center">
          <h3> До 4 марта 2017 </h3>

          Абонемент Slim Bomb за <strong>4300</strong> вместо 8600
          <br />

          <strong>53</strong> процедуры всего по <strong>80 р.</strong> за одну процедуру
          <br />

          <br />
          2-3 размера исчезнут на глазах!
          <br />
          - без посещения спортзала,
          <br />
          - без физических нагрузок,
          <br />
          - без усилий.
          <br />

          <br />
          При покупке абонемента в подарок Вы получите 2 медовых массажа.
          <br />
          Сделайте себе подарок к 8 марта. Оставьте заявку на абонемент.

          <h4> Тел. 8-913-830-2357 </h4>
          <h4> ул. Краснодарская, 35 </h4>
        </div>

        <button
          className="btn"
          onClick={this.handeShowForm}
        >
          Записаться на первую процедуру
        </button>

      </Row>
    )
  }

  render() {
    let { isClick } = this.state

    return (
      <Grid>
        <div className="stock">
          { isClick ? <Form /> : this.renderView() }
        </div>
      </Grid>
    )
  }

}

