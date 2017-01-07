import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import sendEmail from 'lib/email'

@observer
export default class Contacts extends Component {

  state = {
    error: false,
    contact: {
      name: "",
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
    let { name, phone } = contact

    if (name == "" || phone == "") {
      this.setState({ error: true })
    }

    if (name != "" && phone != "") {
      this.setState({ error: false })
      sendEmail({ name: name, phone: phone})
      UIStore.showModalOk()
    }
  }

  renderError() {
    return (
      <div className="text-danger">Необходимо заполнить поля Имя и Телефон</div>
    )
  }

  render() {
    let { name, phone, error } = this.state
    return (
      <Col xs={12} className="background-green ">

        <Col className="footer">
          <h3>
            Оставить заявку
            на бесплатное посещение
          </h3>

          <input
            name="name"
            onChange={this.handeInput}
            placeholder="Ваше Имя*"
            className="form-control"
            value={name}
          />

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
            Записаться
          </button>
        </Col>

      </Col>
    )
  }

}
