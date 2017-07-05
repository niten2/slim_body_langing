import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'

import Answers from './answers'
import Offer from './offer'
// import "./index.scss"

export default observer(class Test extends Component {

  renderAnswers() {
    let { question } = UIStore

    return (
      <div>
        <h3>
          { question.question }
        </h3>

        <Answers question={question} />
      </div>
    )
  }

  render() {
    let { isShowOffer, discount } = UIStore

    return (
      <section id="one" className="wrapper special">
        <div className="inner alt">
          <h2>
            Пройдите тест и получите персональное специальное предложение
          </h2>

          <div>
            { isShowOffer ? <Offer /> : this.renderAnswers() }
          </div>
        </div>

        <div>
          <ul className="actions">
            <li>
              <div onClick={ UIStore.firstQuestion } className="pointer comments">
                Начать заново
              </div>
            </li>

            <li>
              Ваша скидка
              &nbsp;
            </li>

            <li>
              <div className="color-red">{ discount } </div>
            </li>

            <li>
              &nbsp;
              руб.
            </li>
          </ul>
        </div>
      </section>
    )
  }

})
