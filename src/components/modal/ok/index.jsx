import React, { PropTypes, Component } from 'react'
import { Modal } from 'react-bootstrap'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import "./index.scss"

@observer
export default class okModal extends Component {

  handleOnKeyPress = (target) => {
    if (target.charCode == 13) {
      UIStore.hideModalOk()
    }
  }

  onClose = () => {
    UIStore.hideModalForm()
  }

  render () {
    return (
      <div className="form-ok">
        <Modal.Header closeButton>
          <Modal.Title> Спасибо </Modal.Title>
        </Modal.Header>

        <Modal.Body className="body text-center">
          Мы вам скоро перезвоним.
        </Modal.Body>

        <Modal.Footer>
          <button
            className="btn ok"
            onClick={ this.onClose }
          > Хорошо </button>
        </Modal.Footer>
      </div>
    )
  }

}
