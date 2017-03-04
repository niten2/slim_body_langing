import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

import Kavitachia from "components/services/blocks/kavitachia"
import Massaj from "components/services/blocks/massaj"
import Mio from "components/services/blocks/mio"
import Press from "components/services/blocks/press"
import RfLifting from "components/services/blocks/rf_lifting"
import "./index.scss"

export default class Contacts extends Component {

  render() {
    return (
      <Grid className="services">
        <h1> Услуги </h1>

        <Massaj />
        <Kavitachia />
        <Mio />
        <Press />
        <RfLifting />
      </Grid>
    )
  }

}

