import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'

import { isObject, isInteger, find } from "lodash"

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
// import { NavLink } from 'nav_link'

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
    let { phone, name } = UIStore.user

    if (name == "" || phone == "") {
      this.setState({ error: true })
    }

    if (name != "" && phone != "") {
      this.setState({ email_send: true, error: false })
      console.log("send email!!!")
      // sendEmail({ name: name, phone: phone})
    }
  }


  renderError() {
    return (
      <div className="text-danger">Необходимо заполнить поля Имя и Телефон</div>
    )
  }

  renderOk() {
    return (
      <div>
        dfsdfd
      </div>
    )
  }

  render() {
    let { error } = this.state

    return (
      <div>

        <br />
        Получить специальное предложение:
        <br />
        <br />

        <input
          name="name"
          onChange={ this.handeInput }
          placeholder="Ваше Имя*"
          className="form-control"
          value={ UIStore.user.name }
        />

        <br />

        <input
          name="phone"
          onChange={ this.handeInput }
          placeholder="Ваш Номер телефона*"
          className="form-control"
          value={ UIStore.user.phone }
        />

        { error ? this.renderError() : null }

        <br />

        <button
          className="btn"
          onClick={this.handeSendEmail}
        >
          Записаться
        </button>
      </div>
    )
  }

}


