import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import imageUrl from "lib/image_url"

export default class Kavitachia extends Component {

  render() {
    return (
      <div className="texts">

        <img src={ imageUrl('services/kavitaciya.jpg') } />

        <div className="offer flex-first text-right-only-web">

          <h2>
            Кавитация
          </h2>

          Помогает расщепить жировые ткани, посредством низкочастотных ультразвуковых волн. Эффект от процедуры кавитации заметен сразу же после первого сеанса и усиливается в последующие несколько дней. За один сеанс может быть выведено из организма до 15 см3 жира. Это соответствует потере объема в талии от 3 до 5 см после одного сеанса кавитации.
        </div>

      </div>
    )
  }
}

