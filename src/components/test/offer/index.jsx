import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'

import Form from './form'

@observer
export default class Offer extends Component {

  handleReturnOffer() {
    UIStore.returnOffer()
  }

  renderOk() {
    return (
      <div className="card-title">
        <div className="success">
          <h3> Мы аккуратно записали ваши данные. </h3>
          <h4> И уже почти отправили администратора составлять для вас комплекс процедур. </h4>
          <h4> Скоро мы с вами свяжемся. </h4>
        </div>
      </div>
    )
  }

  renderOffer() {
    let { discount } = UIStore

    return (
      <div className="card-title">

        Спасибо за ваши ответы.
        <br />

        Взамен вы получаете
        &nbsp;
        <strong>
          первое бесплатное посещение персонального комплекса процедур разработанного специально для вас.
        </strong>
        <br />

        С скидкой в
        <strong className="color-red"> { discount } </strong>
        рублей.

        <div>
          <Form />
        </div>

      </div>
    )
  }

  render() {
    let { isSendOffer } = UIStore

    return  (
      <div className="text-center">
        { isSendOffer ? this.renderOk() : this.renderOffer() }
      </div>
    )
  }

}
