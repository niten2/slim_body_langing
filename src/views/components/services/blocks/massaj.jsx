import React, { PropTypes, Component } from 'react'

export default class Massaj extends Component {

  render() {
    return (
      <div className="texts row align-items-center">

        <div className="flex-1">
          <img src="images/services/massaj.jpg" />
        </div>

        <div className="flex-1">

          <h2>
            Массаж
          </h2>

          <div>
            Баночный
            <br />
            Медовый
            <br />
            Антицеллюлитный
            <br />
            Бразильская попка
            <br />
            Массаж спины
            <br />
            Массаж шейно-воротниковой зоны
            <br />
            Массаж всего тела
          </div>

        </div>

      </div>
    )
  }
}

