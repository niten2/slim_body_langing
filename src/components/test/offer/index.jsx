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
      <div className="card-title">
        <h3> Мы аккуратно записали ваши данные. </h3>
        <h4> И уже почти отправили администратора составлять для вас комплекс процедур. </h4>
        <h4> Скоро мы с вами свяжемся. </h4>
      </div>
    )
  }

  renderOffer() {
    let { discount } = UIStore

    return (
      <div className="card-title">

        Спасибо за ваши ответы.
        <br />
        Мы скоро с вами свяжемся и предложим вам персональный комплекс процедур с скидкой
        <strong className="color-red"> { discount } </strong>
        рублей.

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
