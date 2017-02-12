import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { PromiseLoadAll } from "helpers/promise"
import { Post } from "models"

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
			<label className="custom-control custom-checkbox">
				<input
					type="checkbox"
					className="custom-control-input"
					checked={answer.checked}
					onChange={this.handleInput}
				/>
				<span className="custom-control-indicator"></span>
				<span className="custom-control-description">
					{ answer.body }
				</span>
			</label>
    )
  }

}
