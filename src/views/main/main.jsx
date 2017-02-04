import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

@observer
export default class Main extends Component {

  handeShowModalForm() {
    UIStore.showModalForm()
  }

  render() {
    return (
      <Grid className="main">

        <Col xs={6}>
          <h1 className="text-center">
            Хотите за 10 дней потерять от 5 до 8 см объема?
          </h1>

          <h3 className="text-center">
            Оставьте заявку прямо сейчас и получите бесплатную процедуру!
          </h3>

          <button onClick={this.handeShowModalForm}>
            Записаться
          </button>

        </Col>

        <Col xs={6}>
          <img src="images/main.png" />
        </Col>

      </Grid>
    )
  }

}
