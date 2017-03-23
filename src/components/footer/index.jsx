import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import sendEmail from 'lib/email'
import "./index.scss"

@observer
export default class Footer extends Component {

  state = {
    error: false,
    isSendEmail: false,
    contact: {
      phone: "",
    },
  }

  handeInput = (e) => {
    const { name, value } = e.target
    let { contact } = this.state

    contact[name] = value
    this.setState({ contact })
  }

  handeSendEmail = () => {
    let { contact } = this.state
    let { phone } = contact

    if (phone == "") {
      this.setState({ error: true })
    } else {
      sendEmail({
        phone: phone,
        place: "footer"
      })
      this.setState({ error: false, isSendEmail: true })
    }

  }

  renderError() {
    return (
      <div className="error">Необходимо заполнить поля Имя и Телефон</div>
    )
  }

  renderOk() {
    return (
      <div className="col">
        <h1> Заявка принята. </h1>
        <h1> Скоро мы с вами свяжемся. </h1>
      </div>
    )
  }

  renderForm() {
    let { phone, error } = this.state
    return (
      <div className="col">
        <h2>
          Оставьте заявку на бесплатное посещение.
        </h2>

        <input
          name="phone"
          onChange={this.handeInput}
          placeholder="Ваш Телефон или Email*"
          className="form-control input"
          value={phone}
        />

        { error ? this.renderError() : null }

        <button
          className="btn btn-primary btn-lg raised"
          onClick={this.handeSendEmail}
        >
          Оставить заявку
        </button>
      </div>
    )
  }

  render() {
    let { isSendEmail } = this.state

    return (
      <div className="container">
        <div className="footer row align-items-center justify-content-center text-center">
          { isSendEmail ? this.renderOk() : this.renderForm() }
        </div>
      </div>
    )
  }

}
