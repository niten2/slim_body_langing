import React, { PropTypes, Component } from 'react'
// import { observer } from 'mobx-react'
// import { UIStore } from 'stores'

// import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

import FirstScreen from "components/first_screen"
import Stock from "components/stock"
import Services from "components/services"
import Reviews from "components/reviews"
import Contacts from "components/contacts"
import Footer from "components/footer"
import Test from "components/test"
// import ModalForm from 'components/modal/form'
// import ModalOk from 'components/modal/ok'

// @observer
export default class Index extends Component {

  render() {
    return (
      <div>
        <FirstScreen />
        <Stock />
        <Services />
        <Reviews />
        <Test />
        <Contacts />
        <Footer />
      </div>
    )
  }

}
