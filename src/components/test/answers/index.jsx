import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'

import Answer from './answer'

@observer
export default class Answers extends Component {

  render() {
    let { question, isLastQuestion } = UIStore

    return  (
      <div className="row">
        { question.answers.map((answer, index) => (
              <Answer
                key={index}
                answerId={answer.id}
                questionId={question.id}
              />
            )
          )
        }

        <div className="answer-btn">
          <button
            className="btn"
            onClick={ UIStore.nextQuestion }
          >
            Ответить
          </button>
        </div>

      </div>
    )
  }

}

