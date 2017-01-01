// import SearchByAccountRights from 'shared/search/search_by_name'
'use strict'
import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { SearchPreset, Template } from 'models'
import { UIStore } from 'stores'

import { Input, form, FormGroup, FormControl, Button, Col } from 'react-bootstrap'
import Select from 'react-select'
import Notification from 'notification'

@observer
export default class SearchByAccountRights extends Component {

  static propTypes = {
    model: PropTypes.func.isRequired,
  }

  state = {
    value: "",
    options: [
      { value: 'admin', label: 'Admin' },
      { value: 'editor', label: 'Editor' },
      { value: 'viewer', label: 'Viewer' },
    ],
  }

  handleChange = (data) => {
    // value == "" ? UIStore.search.setOnlyQueryGtin("") : null
		this.setState({ value: data.value })
  }

  // handleSearch = () => {
  //   let value = this.state.value
  //   if (value) {
  //     UIStore.search.setOnlyQueryGtin(value)
  //   } else {
  //     UIStore.search.setOnlyQueryGtin("")
  //   }
  // }


  // handleKeyDown = (target) => {
  //   if(target.charCode == 13) {
  //     this.handleSearch()
  //   }
  // }

  render() {
    let { options, value } = this.state
    return (
      <Select
        className="disable-clear"
        placeholder="Select"
        type="text"
        options={options}
        onChange={this.handleChange}
        value={value}
      />
    )
  }

}

