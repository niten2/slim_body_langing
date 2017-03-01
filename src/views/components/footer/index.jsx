import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
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
      <Col xsOffset={4} xs={4}>
        <h1>
          Все еще думаете?
          <br />
          Оставьте заявку на бесплатное посещение.
        </h1>

        <input
          name="phone"
          onChange={this.handeInput}
          placeholder="Ваш Телефон*"
          className="form-control"
          value={phone}
        />

        <Clearfix />
        { error ? this.renderError() : null }

        <button
          onClick={this.handeSendEmail}
        >
          Оставить заявку
        </button>
      </Col>
    )
  }

  render() {
    let { isSendEmail } = this.state

    return (
      <footer className="text-center">
        { isSendEmail ? this.renderOk() : this.renderForm() }
      </footer>
    )
  }

}
