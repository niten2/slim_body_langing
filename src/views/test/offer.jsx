import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { PromiseLoadAll } from "helpers/promise"
import { Post } from "models"

import { isObject, isInteger, find } from "lodash"

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'


@observer
export default class Offer extends Component {

  render() {
    return  (
      <div className="align-middle card text-center">
        <div className="card-header">
          Slim Body
        </div>
        <div className="card-block">

          <div className="card-text">
            offer
          </div>

        </div>
        <div className="card-footer text-muted">
          <button
            onClick={ UIStore.firstQuestion }
            className="btn"
          >
            Начать заново
          </button>

          Ваша скидка
        </div>
      </div>
    )
  }

}



