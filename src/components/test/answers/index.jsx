import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import Answer from './answer'

export default observer(class Answers extends Component {

  render() {
    let { question } = UIStore

    return  (
      <div>
      <div className="">
        <ul className="actions">
          <li>
            { question.answers.map((answer, index) =>
                <Answer
                  key={index}
                  answerId={answer.id}
                  questionId={question.id}
                />
              )
            }
          </li>
        </ul>
      </div>

      <ul className="special major actions">
        <li>
          <a
            className="button special icon scrolly"
            onClick={ UIStore.nextQuestion }
          >Ответить</a>
        </li>
      </ul>
    </div>
    )
  }

})
