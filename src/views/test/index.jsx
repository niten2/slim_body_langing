import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { PromiseLoadAll } from "helpers/promise"
import { Post } from "models"

import { isObject, isInteger, find } from "lodash"
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

import Answers from './answers'
import Offer from './offer'

@observer
export default class Test extends Component {

  renderAnswers() {
    let { question } = UIStore
    return (
      <div>
        <h4 className="card-title">
          { question.question }
        </h4>
        <div className="card-text">
          <Answers question={question} />
        </div>
      </div>
    )
  }

  render() {
    let { question, isLastQuestion, isShowOffer, discount } = UIStore

    return (
      <Grid>
        <div className="card text-center">
          <div className="card-header">
            Slim Body (Пройдите тест и получите персональное спецпредложение)
          </div>
          <div className="card-block">

            { isShowOffer ? <Offer /> : this.renderAnswers() }

          </div>
          <div className="card-footer text-muted">
            <p onClick={ UIStore.firstQuestion } className="pointer">
              Начать заново
            </p>

            Ваша скидка { discount } руб.
          </div>
        </div>
      </Grid>
    )
  }

  // render() {
  //   return (
  //     <div>
  //     <Offer />
  //     </div>
  //   )
  // }

}
