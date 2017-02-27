import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

import "./index.scss"

@observer
export default class Main extends Component {

  handeShowModalForm() {
    UIStore.showModalForm({
      title: "Оставить заявку на бесплатное посещение",
      button: "Записаться",
    })
  }

  render() {
    return (
      <div className="container">

      <div className="row main align-items-center">

        <div className="col-sm-6">
          <h1>
            Уменьшим обьемы тела на 2-3 сантиметров за 10 процедур с помощью массажей и аппаратного похудения.
          </h1>

          <h3>
            Оставьте заявку прямо сейчас и получите бесплатную процедуру.
          </h3>

          <button onClick={this.handeShowModalForm}>
            Оставить заявку
          </button>

        </div>

        <div className="col">
          <img src="images/main.png" />
        </div>

        <hr />

      </div>

      </div>
    )
  }

}
