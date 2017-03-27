import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { initWidjet } from 'lib/vk_widjet'

import Form from './form'

@observer
export default class Offer extends Component {

  handleReturnOffer() {
    UIStore.returnOffer()
  }

  renderOk() {
    initWidjet("vk-group-test")

    return (
      <div className="card-title-offer col-12 align-self-end">
        <div className="success">
          <h3> Мы аккуратно записали ваши данные. </h3>
          <h4> И уже почти отправили администратора составлять для вас комплекс процедур. </h4>
          <h4> Скоро мы с вами свяжемся. </h4>
          <h4> Что бы быть в курсе акций и скидок вы можете подписаться на нашу группу: </h4>
          <div id="vk-group-test" />
        </div>
      </div>
    )
  }

  renderOffer() {
    let { discount } = UIStore

    return (
        <div className="card-title-offer col-12 align-self-end">
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

          <Form />
        </div>
    )
  }

  render() {
    let { isSendOffer } = UIStore

    return  (
      <div className="offer row text-center">
        { isSendOffer ? this.renderOk() : this.renderOffer() }
      </div>
    )
  }

}
