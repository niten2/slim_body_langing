import React, { PropTypes, Component } from 'react'
import Form from "./form"
import imageUrl from "lib/image_url"
import "./index.scss"

export default class Main extends Component {

  render() {
    return (
      <div className="first-screen row align-items-center justify-content-center text-center">

        <div className="col-11 col-md-6">
          <h1>
            Уменьшим обьемы тела на 3 - 5 сантиметров за 10 процедур с помощью массажей и аппаратного похудения.
          </h1>
          <h2>
            Получите бесплатную процедуру.
          </h2>
          <div className="row justify-content-center">
            <Form />
          </div>
        </div>

      </div>
    )
  }

}


