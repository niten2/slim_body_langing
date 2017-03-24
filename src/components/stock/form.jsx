import React, { PropTypes, Component } from 'react'
import sendEmail from 'lib/email'
import "./index.scss"

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
        place: "stock"
      })
      this.setState({ error: false, isSendEmail: true })
    }

  }

  renderError() {
    return (
      <div className="error text-danger">Необходимо заполнить полe</div>
    )
  }

  renderOk() {
    return (
      <div className="col offset-sm-3 col-sm-6 ok text-center">
        <h3> Заявка принята. </h3>
        <h4> Скоро мы с вами свяжемся. </h4>
      </div>
    )
  }

  renderForm() {
    let { phone, error } = this.state
    return (
      <div className="col offset-sm-3 col-sm-6 align-self-center text-center">

        <input
          name="phone"
          onChange={ this.handeInput }
          placeholder="Ваш Телефон или Email*"
          className="form-control"
          value={ phone }
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
    return isSendEmail ? this.renderOk() : this.renderForm()
  }

}
