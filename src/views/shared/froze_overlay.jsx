// import ModalFrozeOverlay from 'froze_overlay'
// <ModalFrozeOverlay frozen={ this.state.loading }>
// in modal
// </ModalFrozeOverlay>
// <Button onClick={ this.handleCreateUpdate }>
//   {this.state.loading ? 'Saving' : 'Ok'}
// </Button>

'use strict'
import React, { PropTypes, Component } from 'react'

class ModalFrozeOverlay extends Component {

  static propTypes = {
    frozen: PropTypes.bool.isRequired,
  }

  overlayBlock = {
    background: "#ffffff",
    opacity: 0.5,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zindex: 999999999,
  }

  defaultWrapperStyle = {
    position: 'relative'
  }

  render () {
    let { children, frozen } = this.props;

    return (
      <div style={ this.defaultWrapperStyle }>
        { children }
        { frozen ?  this.renderFrozen() : null }
      </div>
    )
  }

  renderFrozen() {
    const { children, frozen, style } = this.props

    return (
      <div style={ this.overlayBlock }></div>
    )
  }

}

export default ModalFrozeOverlay

