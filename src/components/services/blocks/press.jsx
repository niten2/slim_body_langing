import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

export default class Kavitachia extends Component {

  render() {
    return (
      <div className="texts">

        <div className="image">
          <img src="static/images/services/press.jpg" />
        </div>

        <div className="offer flex-first">
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

