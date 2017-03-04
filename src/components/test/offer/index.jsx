import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import Form from './form'

@observer
export default class Offer extends Component {

  handleReturnOffer() {
    UIStore.returnOffer()
  }

  renderOk() {
    return (
      <h4 className="offer ok">
        <h3> Заявка принята. </h3>
        <h4> Скоро мы с вами свяжемся. </h4>
      </h4>
    )
  }

  renderOffer() {
    let { discount } = UIStore

    return (
      <div className="card-title">

        Спасибо за ваши ответы.
        <br />
        Мы скоро с вами свяжемся и предложим вам персональный комплекс процедур с скидкой { discount }.

        <Col xsOffset={3} xs={6}>
          <h2 className="card-title"> Получить специальное предложение: </h2>
          <Form />
        </Col>

      </div>
    )
  }

  render() {
    let { isSendOffer } = UIStore

    return  (
      <div>
        { isSendOffer ? this.renderOk() : this.renderOffer() }
      </div>
    )
  }

}
