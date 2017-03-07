import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { find } from "lodash"

@observer
export default class Answer extends Component {

  getAnswer() {
    let { questionId, answerId } = this.props
    let question = find(UIStore.questions, (obj) => { return obj.id == questionId })
    let answer = find(question.answers, (obj) => { return obj.id == answerId })
    return answer
  }

  handleInput = () => {
    let { questionId } = this.props
    let { answerId } = this.props
    let question = find(UIStore.questions, (obj) => { return obj.id == questionId })
    let answer = find(question.answers, (obj) => { return obj.id == answerId })
    answer.checked = !answer.checked
  }

  render() {
    let answer = this.getAnswer()

    return  (
      <div className="answer-main">

        <div className="answer-checkbox">
          <input
            className="checkbox"
            type="checkbox"
            name="check"
            checked={answer.checked}
            onChange={this.handleInput}
          />

          <div className="checkbox-custom"></div>
        </div>

        <div className="answer-body">
          { answer.body }
        </div>

        <br />
      </div>
    )
  }

}
