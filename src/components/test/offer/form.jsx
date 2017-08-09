import React, { Component } from 'react'
import { observer} from 'mobx-react'
import { toJS } from "mobx"
import { UIStore } from 'stores'
import sendEmail from "lib/email"
import { Red } from "assets/styled"

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
    let questions = toJS(UIStore.questions.slice())

    if (phone === "") {
      this.setState({ error: true })
    } else {
      sendEmail({
        phone: phone,
        questions: questions,
        place: "Тест",
      })
      this.setState({ error: false })
      UIStore.sendOffer()
    }
  }

  renderError() {
    return (
      <li>
        <Red>Необходимо заполнить полe</Red>
      </li>
    )
  }

  render() {
    let { error } = this.state

    return (
      <div>
        <ul className="actions">
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
              &nbsp;
              Получить
              &nbsp;
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
