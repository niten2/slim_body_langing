import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import sendEmail from 'lib/email'
import "./index.scss"

@observer
export default class Contacts extends Component {

  state = {
    error: false,
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
      this.setState({ error: false })
      sendEmail({ phone: phone})
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
      <footer>

        <Col xsOffset={3} xs={6}>
          <h3>
            Все еще думаете? Оставьте заявку на бесплатное посещение
          </h3>

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

      </footer>
    )
  }

}
