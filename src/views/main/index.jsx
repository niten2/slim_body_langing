import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { PromiseLoadAll } from "helpers/promise"
import { Post } from "models"

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'

import Main from "components/main"
import Services from "components/services"
import Reviews from "components/reviews"
import Contacts from "components/contacts"
import Footer from "components/footer"

import ModalForm from 'components/modal/form'
import ModalOk from 'components/modal/ok'

@observer
export default class Index extends Component {

  render() {
    return (
      <Col>
        <ModalForm />
      </Col>
    )
  }

}
        // { UIStore.modalForm ? <ModalForm /> : null }
        // { UIStore.modalOk ? <ModalOk /> : null }

        // <Main />
        // <Services />
        // <Reviews />
        // <Contacts />
        // <Footer />
