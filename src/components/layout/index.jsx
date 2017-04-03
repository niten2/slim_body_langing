import React, { PropTypes, Component } from 'react'

import FirstScreen from "components/first_screen"
import Services from "components/services"
import Reviews from "components/reviews"
import Contacts from "components/contacts"
import Footer from "components/footer"
import Test from "components/test"
import Stock from "components/stock"
// import Vendors from "components/vendors"

export default class Index extends Component {

  render() {
    return (
      <div className="color-first">

        <FirstScreen />

      <div className="color-second">
        <Services />
      </div>

        <Stock />

      <div className="color-second">
        <Reviews />
      </div>

        <Test />

      <div className="color-second">
        <Contacts />
      </div>

        <Footer />

      </div>
    )
  }

}
// { DEV ? <Vendors /> : null }
