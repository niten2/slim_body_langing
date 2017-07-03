import React, { PropTypes, Component } from 'react'
import { observer} from 'mobx-react'
import { toJS } from "mobx"
import { UIStore } from 'stores'
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
      sendEmail({
        phone: phone,
        questions: questions,
        place: "test",
      })
      this.setState({ error: false })
      UIStore.sendOffer()
    }
  }

  renderError() {
    return (
      <div className="text-danger">Необходимо заполнить полe</div>
    )
  }

  render() {
    let { error } = this.state

    return (
      <div className="offset-sm-3 col-sm-6">
        <input
          name="phone"
          onChange={ this.handeInput }
          placeholder="Ваш телефон или Email*"
          className="form-control"
          value={ UIStore.user.phone }
        />

        { error ? this.renderError() : null }

        <button
          className="btn btn-primary btn-lg raised"
          onClick={this.handeSendEmail}
        >
          Получить
        </button>
      </div>
    )
  }

}


