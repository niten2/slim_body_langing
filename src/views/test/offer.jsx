import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { PromiseLoadAll } from "helpers/promise"
import { Post } from "models"

import { isObject, isInteger, find } from "lodash"

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'


@observer
export default class Offer extends Component {

  render() {
    let { subscription } = UIStore

    return  (
      <div>

        <div className="row justify-content-center">
          <Col xs={12}>
            <h4> Вам подходит Абонемент: <strong> { subscription.name } </strong> </h4>
          </Col>
        </div>

        <div className="row justify-content-center">
          <Col xs={6}>
            Стоимость абонемента:

            &nbsp;
            <span className="red-line-through">
              <span className="color-black">{ subscription.price }</span>
            </span>

            &nbsp;
            <span className="color-red">{ subscription.price - UIStore.discount }</span>

            <br />
            <br />
            В него входят следующие процедуры:
            <br />
            <br />

            <Procedures subscription={subscription} />

            <br />

            <Form />

          </Col>

          <Col xs={6}>
            <img src={`images/${ subscription.image }`} />
          </Col>
        </div>

      </div>
    )
  }

}

@observer
class Procedures extends Component {

  render() {
    let { subscription } = this.props

    return (
      <div>
        { subscription.procedures.map((procedure, index) => (
              <div key={index}> { procedure } </div>
            )
        )}
      </div>
    )
  }
}

@observer
class Form extends Component {

  state = {
    error: false,
  }

  handeInput = (e) => {
    const { name, value } = e.target
    UIStore.user[name] = value
  }

  handeSendEmail = () => {
    let { phone } = UIStore.user

    if (phone == "") {
      this.setState({ error: true })
    }

    if (phone != "") {
      this.setState({ error: false })
      console.log("send email!!!")
      // sendEmail({ name: name, phone: phone})
    }
  }


  renderError() {
    return (
      <div className="text-danger">Необходимо заполнить поля Имя и Телефон</div>
    )
  }

  render() {
    let { error } = this.state

    return (
      <div>
        Записаться на первое бесплатное посещение:
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


