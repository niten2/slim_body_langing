import React, { PropTypes, Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Request } from "models"

export default class ConfirmModal extends Component {

  static propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  }

  handleOnKeyPress = (target) => {
    if (target.charCode == 13) {
      this.props.onAction()
    }
  }

  state = {
    request: {},
    success: false,
  }

  sendRequest = () => {
    let { request } = this.state
    Request.create(request).then(response => {
      if (response.ok) {
        this.setState({ success: true })
      }
    })
  }

  handleInput = (e) => {
    let { request } = this.state
    const { name, value } = e.target
    request[name] = value
    this.setState({ request })
  }

  renderInputs() {
    const { show, onClose } = this.props
    let { success } = this.state
    return (
      <div>
        <Modal.Body>

          <div className="form-group">
            <label> Ваше имя </label>
            <input
              className="form-control"
              name="name"
              defaultValue=""
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label> Ваш номер телефона </label>
            <input
              className="form-control"
              name="phone"
              defaultValue=""
              onChange={this.handleInput}
            />
          </div>

        </Modal.Body>

        <Modal.Footer>
          <button
            onClick={ this.sendRequest }
            className="btn btn-outlined btn-danger"
          > Оставить </button>

          <button
            className="btn btn-outlined btn-primary"
            onClick={ onClose }
          > Закрыть </button>

        </Modal.Footer>
      </div>
    )
  }

  renderSuccess() {
    const { show, onClose } = this.props
    let { success } = this.state
    return (
      <div>
        <Modal.Body>
          Заявка успешно принята!
        </Modal.Body>

        <Modal.Footer>
          <button
            className="btn btn-outlined btn-primary"
            onClick={ onClose }
          > Закрыть </button>
        </Modal.Footer>
      </div>
    )
  }

  render () {
    const { show, onClose } = this.props
    let { success } = this.state

    return (
      <Modal
        show={ show }
        onHide={ onClose }
      >
        <Modal.Header closeButton>
          <Modal.Title>Оставить заявку</Modal.Title>
        </Modal.Header>

        { success ? this.renderSuccess() : this.renderInputs() }

      </Modal>
    )
  }

}





