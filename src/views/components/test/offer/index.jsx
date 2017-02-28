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
        Заявка успешно отправлена.
        <br />
        Мы с вами обязательно свяжемся.
      </h4>
    )
  }

  renderOffer() {
    let { discount } = UIStore

    return (
      <div className="offer">

        Спасибо за ваши ответы.
        <br />
        Мы скоро с вами свяжемся и предложим вам персональный комплекс процедур с скидкой { discount }.

        <Col xsOffset={3} xs={6}>
          <h2> Получить специальное предложение: </h2>
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
