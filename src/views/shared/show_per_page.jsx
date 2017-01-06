import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { SearchPreset } from 'models'
import { UIStore } from 'stores'

import Select from 'react-select'
import { Row, Col } from 'react-bootstrap'

@observer
export default class ShowPerPage extends Component {

  static propTypes = {
    xs: PropTypes.number,
  }

  state = {
    options: [
      { value: '2', label: '2' },
      { value: '5', label: '5' },
      { value: '10', label: '10' },
      { value: '15', label: '15' },
      { value: '20', label: '20' },
    ],
  }

  handlerChange = (event) => {
    UIStore.search.setPerPage(event.value)
  }

  render() {
    let { xs } = this.props
    let { options } = this.state
    return (
      <Col className="custom-per-page" xs={xs || 12}>
        <Row>
        <span className="text">Show</span>
        <div className="custom-per-page-select">
          <Select
            className="disable-clear"
            type="text"
            options={options}
            onChange={this.handlerChange}
            value={String(UIStore.search.perPage)}
          />
        </div>
        <span className="text">entries</span>
        </Row>
      </Col>
    )
  }

}
