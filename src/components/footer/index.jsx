import React, { Component } from 'react'
import sendEmail from 'lib/email'
import { initWidjet } from 'lib/vk_widjet'
import { Center } from "assets/styled"

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

    if (phone === "") {
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
      <ul className="actions">
        <li>
          Необходимо заполнить поля Имя и Телефон
        </li>
      </ul>
    )
  }

  renderOk() {
    initWidjet("vk-group-footer")

    return (
      <div>
        <h1> Спасибо за вашу заявку. </h1>
        <h3> Мы скоро с вами свяжемся. </h3>
        <h4> Что бы быть в курсе акций и скидок вы можете подписаться на нашу группу: </h4>
        <br />
        <Center id="vk-group-footer" />
        <br />
      </div>
    )
  }

  renderForm() {
    let { phone, error } = this.state
    return (
      <div>

        <header className="major">
          <h2>
            Оставьте заявку на бесплатное посещение.
          </h2>
        </header>

        <ul className="actions">
          <li>
            <input
              name="phone"
              onChange={this.handeInput}
              placeholder="Ваш Телефон или Email*"
              className="form-control input"
              value={phone}
              type="text"
            />
          </li>
        </ul>

        { error ? this.renderError() : null }

        <ul className="actions">
          <li>
            <a
              className="button special"
              onClick={this.handeSendEmail}
            >
              Оставить заявку
            </a>
          </li>
        </ul>

    </div>
    )
  }

  render() {
    let { isSendEmail } = this.state

    return (
			<footer id="footer">
        { isSendEmail ? this.renderOk() : this.renderForm() }

				<ul className="icons">
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://vk.com/slim_body_krsk" className="icon fa-vk">
              <span className="label">
                &nbsp;
                VK
              </span>
            </a>
          </li>

          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/slim_body_krsk/" className="icon fa-instagram">
              <span className="label">
                &nbsp;
                Instagram
              </span>
            </a>
          </li>
				</ul>
			</footer>
    )
  }

}
