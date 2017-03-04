import React, { PropTypes, Component } from 'react'

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import Form from "./form"
import "./index.scss"

export default class Main extends Component {

  state = {
    isClick: false,
  }

  handeShowForm = () => {
    this.setState({ isClick: true })
  }

  renderButton() {
    return (
      <button className="btn" onClick={ this.handeShowForm }>
        Получить
      </button>
    )
  }

  render() {
    let { isClick } = this.state

    return (
      <Grid>
        <Row className="first-screen">

          <div className="align-self-center">
            <h1>
              Уменьшим обьемы тела на 3 - 5 сантиметров за 10 процедур с помощью массажей и аппаратного похудения.
            </h1>

            <h2>
              Получите бесплатную процедуру.
            </h2>

            { isClick ? <Form /> : this.renderButton() }
          </div>

        </Row>
      </Grid>
    )
  }

}
