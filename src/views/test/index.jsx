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

  renderView() {
    let { question, isLastQuestion, isShowOffer } = UIStore
    return (
      <div className="card text-center">
        <div className="card-header">
          Slim Body
        </div>
        <div className="card-block">
          <h4 className="card-title">
            { question.question }
          </h4>
          <div className="card-text">
            <Answers question={question} />
          </div>

        </div>
        <div className="card-footer text-muted">
          <button
            onClick={ UIStore.firstQuestion }
            className="btn"
          >
            Начать заново
          </button>

          Ваша скидка
        </div>
      </div>
    )
  }

  render() {
    let { question, isLastQuestion, isShowOffer } = UIStore
    return (
      <Grid>
        { isShowOffer ? <Offer /> : this.renderView() }
      </Grid>
    )
  }

}

