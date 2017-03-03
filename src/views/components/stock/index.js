import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'

import "./index.scss"

@observer
export default class Contacts extends Component {

  handeShowModalForm() {
    UIStore.showModalForm({
      title: "Записаться на первую процедуру",
      button: "Записаться",
    })
  }

  render() {
    return (
      <div className="container stock">
        <h1> Акция </h1>

        <div className="offer">
          <img src="images/stock/bomb.jpg" />
        </div>

        <div className="offer">
          <h3> До 4 марта 2017 </h3>

          Абонемент Slim Bomb за <strong>4300</strong> вместо 8600

          <h4> <strong>53</strong> процедуры всего по <strong>80 р.</strong> за одну процедуру </h4>

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

          <h4> Тел. 8-913-830-2357 ул. Краснодарская, 35 </h4>
        </div>

        <div className="flex-center">
          <button onClick={this.handeShowModalForm}>
            Записаться на первую процедуру
          </button>
        </div>

      </div>
    )
  }

}

