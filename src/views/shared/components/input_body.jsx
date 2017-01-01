import React, { Component, PropTypes } from 'react'

import { Row, Clearfix, Col, Grid } from 'react-bootstrap'

export default class InputBody extends Component {

  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
  }

  render() {
    const { value, label, type, name, placeholder, className, onChange, onFocus } = this.props

    return (
      <div className="form-group">
        <label className="col-xs-2 control-label">
          { label }
        </label>
        <div className="col-xs-10">
          <span className="twitter-typeahead">
            <input
              type={ type }
              name={ name }
              placeholder={ placeholder }
              className={ className || "form-control" }
              value={ value }
              onChange={ onChange }
              onFocus={ onFocus }
            />
          </span>
        </div>
      </div>
    )
  }

}

