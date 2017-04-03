import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'

import Answers from './answers'
import Offer from './offer'
import "./index.scss"

@observer
export default class Test extends Component {

  renderAnswers() {
    let { question } = UIStore

    return (
      <div className="row align-items-center justify-content-center text-center">
        <div className="col-12">
          <h2 className="title">
            { question.question }
          </h2>

          <div className="text">
            <Answers question={question} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    let { question, isLastQuestion, isShowOffer, discount } = UIStore

    return (
      <div className="container test">
      <div className="row">

        <div className="col-12 text-center">
          <h1>
            Пройдите тест и получите персональное спец. предложение
          </h1>
        </div>

        <div className="col-12 custom-card">
            { isShowOffer ? <Offer /> : this.renderAnswers() }
        </div>

        <div className="col-12 text-center test-footer">
          <div onClick={ UIStore.firstQuestion } className="pointer comments">
            Начать заново
          </div>

          &nbsp;
          &nbsp;
          &nbsp;

          <div className="comments">
            Ваша скидка
            &nbsp;
            <div className="color-red">{ discount } </div>
            &nbsp;
            руб.
          </div>

        </div>

      </div>
      </div>
    )
  }

}

