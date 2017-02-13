import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { PromiseLoadAll } from "helpers/promise"
import { Post } from "models"

import { isObject, isInteger, find } from "lodash"

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'

import Answer from './answer'

@observer
export default class Answers extends Component {

  responseButton = () => {
    return(
      <button
        onClick={ UIStore.nextQuestion }
        className="btn"
      >
        Ответить
      </button>
    )
  }

  render() {
    let { question, isLastQuestion } = UIStore

    return  (
      <div className="test custom-controls-stacked">

        { question.answers.map((answer, index) => (
              <Answer
                key={index}
                answer={answer}
                questionId={question.id}
              />
            )
          )
        }
        { this.responseButton() }
      </div>
    )
  }

}

