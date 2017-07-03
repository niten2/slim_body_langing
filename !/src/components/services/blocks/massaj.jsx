import React, { PropTypes, Component } from 'react'
import imageUrl from "lib/image_url"

export default class Massaj extends Component {

  render() {
    return (
      <div className="texts">

        <div className="image">
          <img src={ imageUrl('services/massaj.jpg') } />
        </div>

        <div className="offer">
          <h2>
            Массаж
          </h2>

          - Баночный
          <br />
          - Медовый
          <br />
          - Антицеллюлитный
          <br />
          - Бразильская попка
          <br />
          - Массаж спины
          <br />
          - Массаж шейно-воротниковой зоны
          <br />
          - Массаж всего тела
        </div>

      </div>
    )
  }
}

