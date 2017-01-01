import React, { Component, PropTypes } from 'react'

import { Row, Clearfix, Col, Grid } from 'react-bootstrap'

export default class Input extends Component {

  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.string,
    onKeyPress: PropTypes.func,
  }

  renderIcon() {
    return (
      <div className="input-group-addon">
        <span className={ this.props.icon } />
      </div>
    )
  }

  render() {
    const { onKeyPress, disabled, value, defaultValue, type, name, placeholder, className, onChange } = this.props

    return (
      <div className="form-group input-down">
        <div className="input-group input-group-lg">
          { this.props.icon ? this.renderIcon() : null }
          <input
            type={ type }
            name={ name }
            placeholder={ placeholder }
            className={ className }
            onChange={ onChange }
            value={ value }
            defaultValue={ defaultValue }
            disabled={ disabled ? true : false }
            onKeyPress={ onKeyPress }
          />
        </div>
      </div>
    )
  }

}

