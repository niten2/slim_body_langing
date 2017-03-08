import React, { PropTypes, Component } from 'react'

import Form from "./form"
import "./index.scss"
import imageUrl from "lib/image_url"

export default class Main extends Component {

  state = {
    isClick: true,
  }

  handeShowForm = () => {
    this.setState({ isClick: true })
  }

  renderButton() {
    return (
      <button className="btn" onClick={ this.handeShowForm }>
        Получить
      </button>
    )
  }

  render() {
    let { isClick } = this.state

    return (
      <div className="">
        <div className="row first-screen">

          <div className="align-self-center">
            <h1>
              Уменьшим обьемы тела на 3 - 5 сантиметров за 10 процедур с помощью массажей и аппаратного похудения.
            </h1>

            <h2>
              Получите бесплатную процедуру.
            </h2>

            { isClick ? <Form /> : this.renderButton() }
          </div>

        </div>
      </div>
    )
  }

}

          // <img src={imageUrl("first.gif")} />
