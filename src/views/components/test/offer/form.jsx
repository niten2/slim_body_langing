import React, { PropTypes, Component } from 'react'
import { observer} from 'mobx-react'
import { toJS } from "mobx"
import { UIStore } from 'stores'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import sendEmail from "lib/email"

@observer
export default class Form extends Component {

  state = {
    error: false,
    email_send: false,
  }

  handeInput = (e) => {
    const { name, value } = e.target
    UIStore.user[name] = value
  }

  handeSendEmail = () => {
    let { phone } = UIStore.user
    let questions  = JSON.stringify(toJS(UIStore.questions.slice()))

    if (phone == "") {
      this.setState({ error: true })
    } else {
      this.setState({ error: false })
      UIStore.sendOffer()
      sendEmail({ phone: phone, questions: questions })
    }

  }

  renderError() {
    return (
      <div className="text-danger">Необходимо заполнить полe телефон</div>
    )
  }

  renderOk() {
    return (
      <div>
        dfsdfd
      </div>
    )
  }

  render() {
    let { error } = this.state

    return (
      <div>
        <input
          name="phone"
          onChange={ this.handeInput }
          placeholder="Ваш телефон*"
          className="form-control"
          value={ UIStore.user.phone }
        />

        { error ? this.renderError() : null }

        <br />

        <button
          onClick={this.handeSendEmail}
        >
          Получить
        </button>
      </div>
    )
  }

}


