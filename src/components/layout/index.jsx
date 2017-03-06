import React, { PropTypes, Component } from 'react'

import FirstScreen from "components/first_screen"
import Stock from "components/stock"
import Services from "components/services"
import Reviews from "components/reviews"
import Contacts from "components/contacts"
import Footer from "components/footer"
import Test from "components/test"
// import Vendors from 'components/vendors'

export default class Index extends Component {

  render() {
    return (
      <div>
        <FirstScreen />
        <Services />
        <Reviews />
        <Test />
        <Contacts />
        <Footer />
      </div>
    )
  }

}
        // <Stock />
