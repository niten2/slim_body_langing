import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
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
      this.setState({ error: false, isSendEmail: true })
      sendEmail({ phone: phone})
    }

  }

  renderError() {
    return (
      <div className="text-danger">Необходимо заполнить поля Имя и Телефон</div>
    )
  }

  renderOk() {
    return (
      <Col xsOffset={3} xs={6} className="ok">
        <h3> Заявка принята. </h3>
        <h4> Скоро мы с вами свяжемся. </h4>
      </Col>
    )
  }

  renderForm() {
    let { phone, error } = this.state
    return (
      <Col className="align-self-center">

        <input
          name="phone"
          onChange={ this.handeInput }
          placeholder="Ваш Телефон или Email*"
          className="form-control"
          value={ phone }
        />

        <Clearfix />
        { error ? this.renderError() : null }

        <button
          className="btn"
          onClick={this.handeSendEmail}
        >
          Оставить заявку
        </button>

      </Col>
    )
  }

  render() {
    let { isSendEmail } = this.state
    return isSendEmail ? this.renderOk() : this.renderForm()
  }

}
