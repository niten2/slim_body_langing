import React, { PropTypes, Component } from 'react'

import FirstScreen from "components/first_screen"
import Services from "components/services"
import Reviews from "components/reviews"
import Contacts from "components/contacts"
import Footer from "components/footer"
import Test from "components/test"
import Stock from "components/stock"

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
