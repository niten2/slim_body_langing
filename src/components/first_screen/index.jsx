import React, { Component } from 'react'
import Form from "./form"
// import "./index.scss"
import image from "public/assets/images/main.png"


export default class Main extends Component {

  render() {

    return (
      <div className="container">
        <div className="first-screen row align-items-center justify-content-center text-center">
          <div className="col-12">

            image
            <img src={image} alt="Logo" />

          </div>
        </div>
      </div>
    )
  }

}


            // <Form />
