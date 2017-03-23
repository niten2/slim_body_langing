import React, { PropTypes, Component } from 'react'
import sendEmail from 'lib/email'

export default class Form extends Component {

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
        place: "first screen"
      })
      this.setState({ error: false, isSendEmail: true })
    }

  }

  renderError() {
    return (
      <div className="text-danger">Необходимо заполнить полe</div>
    )
  }

  renderOk() {
    return (
      <div>
        <h3> Заявка принята. </h3>
        <h3> Скоро мы с вами свяжемся. </h3>
      </div>
    )
  }

  renderForm() {
    let { phone, error } = this.state
    return (
      <div>
        <input
          name="phone"
          onChange={this.handeInput}
          placeholder="Ваш Телефон или Email*"
          className="form-control"
          value={phone}
        />
        <br />

        { error ? this.renderError() : null }

        <button
          className="btn btn-primary raised btn-block"
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
      <div>
        { isSendEmail ? this.renderOk() : this.renderForm() }
      </div>
    )
  }

}
