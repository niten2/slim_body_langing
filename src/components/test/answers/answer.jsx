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
      <div className="row answer">
        <div className="checkbox col-12 offset-sm-4 col-sm-4 align-self-center text-left">
          <div className="col">

            <div className="checkbox text-center">
              <input
                type="checkbox"
                name="check"
                checked={answer.checked}
                onChange={this.handleInput}
              />
            </div>

            &nbsp;

            <div className="body text-center">
              { answer.body }
            </div>

          </div>
        </div>
      </div>
    )
  }

})
