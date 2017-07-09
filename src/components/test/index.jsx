import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Red, StartAfresh } from "assets/styled"

import Answers from './answers'
import Offer from './offer'

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
            { true ? <Offer /> : this.renderAnswers() }
          </div>
        </div>

        <div>
          <ul className="actions">
            <li>
              <StartAfresh onClick={ UIStore.firstQuestion }>
                Начать заново
              </StartAfresh>
            </li>

            <li>
                Ваша скидка
                &nbsp;
                <Red>{ discount } </Red>
                &nbsp;
                руб.
            </li>

          </ul>
        </div>
      </section>
    )
  }

})
