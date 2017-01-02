import React, { Component, PropTypes } from 'react'

export default class ErrorsGroup extends Component {

  // static propTypes = {
  //   className: PropTypes.string,
  //   errors: PropTypes.string,
  // }

  render() {
    const { children } = this.props
    return (
      <div className="form-group">
        <div className="rubix-grid container-fluid">
          <div className="row button">
            { children }
          </div>
        </div>
      </div>
    )
  }

}

