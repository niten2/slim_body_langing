import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import find from "lodash/find"

export default observer(class Answer extends Component {

  getAnswer() {
    let { questionId, answerId } = this.props
    let question = find(UIStore.questions, (obj) => { return obj.id === questionId })
    let answer = find(question.answers, (obj) => { return obj.id === answerId })
    return answer
  }

  handleInput = () => {
    let { questionId } = this.props
    let { answerId } = this.props
    let question = find(UIStore.questions, (obj) => { return obj.id === questionId })
    let answer = find(question.answers, (obj) => { return obj.id === answerId })
    answer.checked = !answer.checked
  }

  render() {
    let answer = this.getAnswer()

    return  (
      <div>
        <input
          name="check"
          type="radio"
          id="demo-priority-high"
          checked={answer.checked}
          onChange={this.handleInput}
        />
        <label>{ answer.body }</label>
      </div>
    )
  }

})
            // &nbsp;

            // <div className="body text-center">
            //   { answer.body }
            // </div>
