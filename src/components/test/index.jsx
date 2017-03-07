import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'

import { isObject, isInteger, find } from "lodash"
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

import Answers from './answers'
import Offer from './offer'
import "./index.scss"

@observer
export default class Test extends Component {

  renderAnswers() {
    let { question } = UIStore
    return (
      <div>
        <h4 className="card-title">
          <strong> { question.question } </strong>
        </h4>

        <div className="card-text row clearfix">
          <Answers question={question} />
        </div>
      </div>
    )
  }

  render() {
    let { question, isLastQuestion, isShowOffer, discount } = UIStore

    return (
      <div className="container test">
        <h1 className="flex-center">
          Пройдите тест и получите персональное спец. предложение
        </h1>

        <div className="card flex-center">
          { isShowOffer ? <Offer /> : this.renderAnswers() }
        </div>

        <div className="test-footer">

          <div onClick={ UIStore.firstQuestion } className="pointer comments">
            Начать заново
          </div>

          <div className="comments">
            Ваша скидка
            &nbsp;
            <div className="color-red">{ discount } </div>

            &nbsp;
            руб.
          </div>

        </div>

      </div>
    )
  }

}

