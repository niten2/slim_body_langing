import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { initWidjet } from 'lib/vk_widjet'
import { Center } from "assets/styled"

import Form from './form'

export default observer(class Offer extends Component {

  renderOk() {
    initWidjet("vk-group-test")

    return (
      <div>
        <div className="success">
          <h3> Мы аккуратно записали ваши данные. </h3>
          <h4> И уже почти отправили администратора составлять для вас комплекс процедур. </h4>
          <h4> Скоро мы с вами свяжемся. </h4>
          <h4> Что бы быть в курсе акций и скидок вы можете подписаться на нашу группу: </h4>
          <br />
          <Center id="vk-group-test" />
          <br />
        </div>
      </div>
    )
  }

  renderOffer() {
    let { discount } = UIStore

    return (
      <div>
        <header>
          <h4>Спасибо за ваши ответы.</h4>
          <p>Вы получаете первое бесплатное посещение персонального комплекса процедур разработанного специально для вас.</p>
          <p>
            С скидкой в { discount } рублей.
          </p>
        </header>

        <Form />
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

})
