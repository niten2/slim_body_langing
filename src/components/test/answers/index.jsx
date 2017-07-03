import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import Answer from './answer'

export default observer(class Answers extends Component {

  render() {
    let { question, isLastQuestion } = UIStore

    return  (
      <div className="row answers">

        <div className="col-12 align-self-center answer-block">
          { question.answers.map((answer, index) =>
              <Answer
                key={index}
                answerId={answer.id}
                questionId={question.id}
              />
            )
          }
        </div>

        <div className="col-12 align-self-end answer-btn">
          <button
            className="btn btn-primary btn-lg raised"
            onClick={ UIStore.nextQuestion }
          >
            Ответить
          </button>
        </div>


      </div>
    )
  }

})
