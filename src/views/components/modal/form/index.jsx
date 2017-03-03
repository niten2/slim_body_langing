import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import sendEmail from 'lib/email'

import { Modal, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import "./index.scss"
import FormOk from "components/modal/ok"

@observer
export default class modalForm extends Component {

  handleOnKeyPress = (target) => {
    if (target.charCode == 13) {
      UIStore.hideModalForm()
    }
  }

  onClose = () => {
    UIStore.hideModalForm()
  }

  state = {
    email_send: false,
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
      sendEmail({ phone: phone })
      this.setState({ email_send: true, error: false })
    }

  }

  onClose() {
    UIStore.hideModalForm()
  }

  renderError() {
    return (
      <div className="error">
        Необходимо заполнить поле.
      </div>
    )
  }

  renderEmail() {
    let { phone, error } = this.state
    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title>
            { UIStore.titleModalForm }
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Col className="modal-form">

            <input
              name="phone"
              onChange={this.handeInput}
              placeholder="Ваш Телефон или Email*"
              className="form-control"
              value={phone}
            />

            <Clearfix />
            { error ? this.renderError() : null }

          </Col>
        </Modal.Body>

        <Modal.Footer>
          <button
            className="btn cancel"
            onClick={ this.onClose }
          > Отменить </button>

          <button
            className="btn ok"
            onClick={this.handeSendEmail}
          >
            { UIStore.buttonModalForm }
          </button>
        </Modal.Footer>
      </div>
    )
  }

  render () {
    let { email_send } = this.state

    return (

      <Modal
        show={ UIStore.modalForm }
        onHide={ this.onClose }
        onKeyPress={ this.handleOnKeyPress }
        dialogClassName="first-modal-form"
      >
        { email_send ? <FormOk /> : this.renderEmail() }
      </Modal>

    )
  }

}

