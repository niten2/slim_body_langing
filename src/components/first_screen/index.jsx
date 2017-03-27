import React, { PropTypes, Component } from 'react'
import Form from "./form"
import imageUrl from "lib/image_url"
import "./index.scss"

export default class Main extends Component {

  render() {
    return (
      <div className="first-screen row align-items-center justify-content-center text-center">
        <div className="col-12 col-md-6">
          <Form />
        </div>
      </div>
    )
  }

}


