import React, { Component, PropTypes } from 'react'

export default class ErrorsGroup extends Component {

  static propTypes = {
    className: PropTypes.string,
    errors: PropTypes.string,
  }

  render() {
    const { className, errors } = this.props
    return (
      <div className="form-group">
        <div className="rubix-grid container-fluid">
          <div className="row button">
            <div className={ className || "bg-lightred fg-white text-center" }>{ errors }</div>
          </div>
        </div>
      </div>
    )
  }

}

