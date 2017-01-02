// import SearchByEmail from 'shared/search/search_by_name'

'use strict'
import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { SearchPreset, Template } from 'models'
import { UIStore } from 'stores'

import { Input, form, FormGroup, FormControl, Button, Col } from 'react-bootstrap'
import Select from 'react-select'
import Notification from 'notification'

@observer
export default class SearchByEmail extends Component {

  static propTypes = {
    model: PropTypes.func.isRequired,
  }

  state = {
    value: "",
  }

  handleSearch = () => {
    let value = this.state.value
    if (value) {
      UIStore.search.setOnlyQueryGtin(value)
    } else {
      UIStore.search.setOnlyQueryGtin("")
    }
  }

  handleChange = (event) => {
    let value = event.target.value
    value == "" ? UIStore.search.setOnlyQueryGtin("") : null
		this.setState({ value: value })
  }

  handleKeyDown = (target) => {
    if(target.charCode == 13) {
      this.handleSearch()
    }
  }

  render() {

    return (
      <input
        type="text"
        value={ this.state.value }
        onChange={this.handleChange}
        className="form-control"
      />
    )
  }

}

      // <div
      //   onKeyPress={ this.handleKeyDown }
      //   className="input-group"
      // >
      //   <span className="input-group-btn">
      //     <button
      //       className="btn btn-primary"
      //       type="button"
      //       onClick={ this.handleSearch }
      //     >Search</button>
      //   </span>

      // </div>
