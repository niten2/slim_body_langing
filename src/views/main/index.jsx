import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

import FirstScreen from "components/first_screen"
import Services from "components/services"

import Stock from "components/stock"

import Reviews from "components/reviews"
import Contacts from "components/contacts"
import Footer from "components/footer"

import ModalForm from 'components/modal/form'
import ModalOk from 'components/modal/ok'

import Test from "components/test"

@observer
export default class Index extends Component {

  render() {
    return (
      <Col>
        { UIStore.modalForm ? <ModalForm /> : null }
        { UIStore.modalOk ? <ModalOk /> : null }

        <FirstScreen />
        <Stock />
        <Services />
        <Reviews />
        <Test />
        <Contacts />
        <Footer />

      </Col>
    )
  }

}
