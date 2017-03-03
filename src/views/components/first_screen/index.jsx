import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

import "./index.scss"

@observer
export default class Main extends Component {

  handeShowModalForm() {
    UIStore.showModalForm({
      title: "Получить процедуру",
      button: "Получить",
    })
  }

  render() {
    return (
      <div className="container">

      <div className="row main align-items-center">

        <div className="col">
          <h1>
            Уменьшим обьемы тела на 3 - 5 сантиметров за 10 процедур с помощью массажей и аппаратного похудения.
          </h1>

          <h2>
            Получите бесплатную процедуру.
          </h2>

          <button onClick={this.handeShowModalForm}>
            Получить
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
