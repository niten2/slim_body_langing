import React, { Component } from 'react'
import { observer} from 'mobx-react'
import { toJS } from "mobx"
import { UIStore } from 'stores'
import sendEmail from "lib/email"

export default observer(class Form extends Component {

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

    if (phone === "") {
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
      <li>
        <div className="text-danger">Необходимо заполнить полe</div>
      </li>
    )
  }

  render() {
    let { error } = this.state

    return (
      <div>
        <ul className="icons">
          <li>
            <input
              name="phone"
              type="text"
              onChange={ this.handeInput }
              placeholder="Ваш телефон или Email*"
              className="form-control"
              value={ UIStore.user.phone }
            />
          </li>

          <li>
            <a
              className="button special"
              onClick={this.handeSendEmail}
            >
              Получить
            </a>
          </li>
        </ul>

        <ul className="icons">
          { error ? this.renderError() : null }
        </ul>
      </div>
    )
  }

})
