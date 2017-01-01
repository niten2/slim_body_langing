import React, { Component, PropTypes } from 'react'

export default class InfoGroup extends Component {

  static propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
  }

  render() {
    const { message } = this.props

    return (
      <div className="form-group">
        <div className="rubix-grid container-fluid">
          <div className="row button">
            <div className="info-group bg-hoverblue fg-black50 text-center">{ message }</div>
          </div>
        </div>
      </div>
    )
  }

}

