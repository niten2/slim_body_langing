import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'

import { isObject, isInteger, find } from "lodash"

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'

import Answer from './answer'

@observer
export default class Answers extends Component {

  render() {
    let { question, isLastQuestion } = UIStore

    return  (
      <div>
        { question.answers.map((answer, index) => (
              <Answer
                key={index}
                answer={answer}
                questionId={question.id}
              />
            )
          )
        }

        <button
          onClick={ UIStore.nextQuestion }
          className="btn"
        >
          Ответить
        </button>

      </div>
    )
  }

}

