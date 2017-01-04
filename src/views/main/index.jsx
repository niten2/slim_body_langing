import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { PromiseLoadAll } from "helpers/promise"
import { Post } from "models"

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'

// import Spinner from 'spinner'

import Main from "./main"
import Footer from "./footer"
import Contacts from "./contacts"
import Reviews from "./reviews"
import Services from "./services"


@observer
class Index extends Component {

  render() {
    return renderView()
  }

}

const renderView = () => (
  <Col xs={12}>
    <Main />
    <Services />
    <Reviews />
    <Contacts />
    <Footer />
  </Col>
)

export default Index
