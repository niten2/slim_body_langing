import React, { PropTypes, Component } from 'react'
import ImageGallery from 'react-image-gallery'

import "./index.scss"
import Massaj from "./massaj"
import Blocks from "./blocks"

export default class Contacts extends Component {

  render() {
    return (
      <div className="services">
        <h1> Услуги </h1>

        <div className="container">
          <Massaj />
          <Blocks />
        </div>

      </div>
    )
  }

}

