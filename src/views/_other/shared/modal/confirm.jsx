// import { UIStore } from 'stores'
// import ConfirmModal from 'shared/modal/confirm'

// onClick={this.handleShowConfirm}

// handleShowConfirm = () => {
//   UIStore.confim.handleShow({
//     title: "Destroy User",
//     message: "Are you absolutely sure you want to destroy user?",
//     onAction: this.handleDestroy,
//   })
// }

"use strict"
import React, { PropTypes, Component } from 'react'
import { Modal } from 'react-bootstrap'
import { InfoGroup } from 'shared/components'

export default class ConfirmModal extends Component {

  static propTypes = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onAction: PropTypes.func.isRequired,
    okButton: PropTypes.string,
    cancelButton: PropTypes.string
  }

  handleOnKeyPress = (target) => {
    if (target.charCode == 13) {
      this.props.onAction()
    }
  }

  render () {
    const { show, title, message, onClose, okButton, cancelButton, onAction } = this.props

    return (
      <Modal
        show={ show }
        onHide={ onClose }
        onKeyPress={ this.handleOnKeyPress }
      >
        <Modal.Header closeButton>
          <Modal.Title>{ title }</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InfoGroup
            message={ message }
          />
        </Modal.Body>

        <Modal.Footer>
          <button
            onClick={ onClose }
            className="btn btn-outlined btn-danger"
          > { cancelButton || "Cancel" } </button>

          <button
            className="btn btn-outlined btn-primary"
            onClick={ onAction }
          > { okButton || "Yes" } </button>

        </Modal.Footer>

      </Modal>
    )
  }

}





