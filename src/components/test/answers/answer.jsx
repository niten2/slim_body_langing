import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import styled from "styled-components"
import find from "lodash/find"

const AnswerDiv = styled.p`
  float: left;
  position: relative;
  clear: both;
  margin: 0px;
`
export default observer(class Answer extends Component {

  getAnswer() {
    let { questionId, answerId } = this.props
    let question = find(UIStore.questions, (obj) => { return obj.id === questionId })
    let answer = find(question.answers, (obj) => { return obj.id === answerId })
    return answer
  }

  handleCheck = () => {
    let { questionId } = this.props
    let { answerId } = this.props
    let question = find(UIStore.questions, (obj) => { return obj.id === questionId })
    let answer = find(question.answers, (obj) => { return obj.id === answerId })
    answer.checked = !answer.checked
  }

  render() {
    let answer = this.getAnswer()

    return  (
      <AnswerDiv
        onClick={this.handleCheck}
      >
        <input
          name="check"
          type="checkbox"
          checked={answer.checked}
        />
        <label>{ answer.body }</label>
      </AnswerDiv>
    )
  }

})
