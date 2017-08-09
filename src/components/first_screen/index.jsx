import React, { Component } from 'react'
import sendEmail from 'lib/email'
import { initWidjet } from 'lib/vk_widjet'
import { Center } from "assets/styled"

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


    if (phone === "") {
      this.setState({ error: true })
    } else {
      sendEmail({
        phone: phone,
        place: "Первый экран"
      })
      this.setState({ error: false, isSendEmail: true })
    }
  }

  renderError() {
    return (
      <div>Необходимо заполнить полe</div>
    )
  }

  renderOk() {
    initWidjet("vk-group-first-screen")

    return (
      <header id="header">
        <div className="content">
          <h1> Спасибо за вашу заявку. </h1>
          <h3> Мы скоро с вами свяжемся. </h3>
          <h4> Что бы быть в курсе акций и скидок вы можете подписаться на нашу группу: </h4>
          <br />
          <Center id="vk-group-first-screen" />
          <br />
        </div>
      </header>
    )
  }

  renderForm() {
    let { phone, error } = this.state
    return (
      <div>

        <ul className="actions">
          <li>
            <input
              name="phone"
              onChange={this.handeInput}
              placeholder="Ваш Телефон или Email*"
              type="text"
              value={phone}
            />
          </li>


          <li>
            <a
              className="button special"
              onClick={this.handeSendEmail}
            >
              Оставить заявку
            </a>
          </li>
        </ul>

        <ul className="actions">
          <li>
            { error ? this.renderError() : null }
          </li>
        </ul>

      </div>
    )
  }

  render() {
    let { isSendEmail } = this.state

    if (isSendEmail) {
      return this.renderOk()
    } else {
      return (
        <header id="header">
          <div className="content">

            <h1>
              Уменьшим обьемы тела на 3 - 5 сантиметров
            </h1>

            <h2>
              за 10 посещений с помощью массажей и аппаратного похудения.
            </h2>

            <p>
              ул. Краснодарская 35.
            </p>

            { this.renderForm() }
          </div>
        </header>
      )
    }
  }

}

