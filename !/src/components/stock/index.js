import React, { PropTypes, Component } from 'react'
import imageUrl from "lib/image_url"
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
      <div className="row">

        <div className="col-12 col-sm-6 align-self-center">
          <img src={imageUrl("stock/hot.jpg")} />
        </div>

        <div className="col-12 offer col-sm-6 align-self-center">
          <h3> "Горячий" абонемент с 35% скидкой за </h3>
          <h3> <strong>7999</strong> вместо 12 309 руб. </h3>

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
          - 4 кавитаций
          <br />
          - 2 процедуры RF-лифтинга
          <br />
          - Безлимитный массаж
          <br />
          - Безлимитная прессотерапия
          <br />
          - Безлимитная миостимуляция
          <br />
          - Безлимитные жиросжигающие обертывания
          <br />
          <br />

          Количество абонементов по этой цене огранничено.
          <br />
          Успейте приобрести пока не закончились.
          <br />
          Безлимит действует 35 дней со дня первого посещения.
          <br />
          <br />

          <h4> Тел. 8-913-830-2357 </h4>
          <h4> ул. Краснодарская, 35 </h4>
        </div>

        <div className="col-12 text-center button-offer">
          <button
            className="btn btn-primary btn-lg raised"
            onClick={ this.handeShowForm }
          >
            Записаться на первую процедуру
          </button>
        </div>

      </div>
    )
  }

  render() {
    let { isClick } = this.state

    return (
      <div className="container stock">
        { isClick ? <Form /> : this.renderView() }
      </div>
    )
  }

}

