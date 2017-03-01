import React, { PropTypes, Component } from 'react'

import Kavitachia from "components/services/blocks/kavitachia"
import Massaj from "components/services/blocks/massaj"
import Mio from "components/services/blocks/mio"
import Press from "components/services/blocks/press"
import RfLifting from "components/services/blocks/rf_lifting"

export default class BlockComponent extends Component {

  render() {
    return (
      <div className="container">
        <Massaj />
        <Kavitachia />
        <Mio />
        <Press />
        <RfLifting />
      </div>
    )
  }

}

