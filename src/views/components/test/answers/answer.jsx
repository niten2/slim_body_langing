import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'

import { isObject, isInteger, find } from "lodash"

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'

@observer
export default class Answer extends Component {

  handleInput = () => {
    let { questionId } = this.props
    let { answer } = this.props

    let question = find(UIStore.questions, (obj) => { return obj.id == questionId })
    let findAnswer = find(question.answers, (obj) => { return obj.id == answer.id })

    findAnswer.checked = !findAnswer.checked
  }

  render() {
    let { answer } = this.props

    return  (
      <div className="flex-center">

        <div className="flex-1" />

        <div className="flex-answer">
          <label>
            <input
              className="checkbox"
              type="checkbox"
              name="check"
              checked={answer.checked}
              onChange={this.handleInput}
            />
              <span className="checkbox-custom"></span>
              &nbsp;
              &nbsp;
              <span className="">{ answer.body }</span>
          </label>
        </div>

      </div>
    )
  }

}
