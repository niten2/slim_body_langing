import React, { Component } from 'react'
import imageUrl from "lib/image_url"

export default class Kavitachia extends Component {

  render() {
    return (
      <div className="texts">

        <div className="image">
          <img alt="" src={ imageUrl('services/press.jpg') } />
        </div>

        <div className="offer flex-first text-right-only-web">
          <h2>
            Обертывание и Прессотерапия
          </h2>

          <div>
            Помогает выводить из организма избыточную жидкость, шлаки, продукты распада и обмена из межклеточного пространства, лифматических узлов и кровеносных сосудов, восстанавливая общий водный баланс, уменьшая проявления целлюлита, избавляя от сосудистых сеточек. Так же прессотерапия помогает при варикозе.
          </div>
        </div>

      </div>
    )
  }
}

