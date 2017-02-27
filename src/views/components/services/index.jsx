import React, { PropTypes, Component } from 'react'
import ImageGallery from 'react-image-gallery'

import Massaj from "./massaj"
import Blocks from "./blocks"
import "./index.scss"

export default class Contacts extends Component {

  render() {
    return (
      <div className="container services">
        <h1> Услуги </h1>

        <div className="container">
          <Massaj />
          <Blocks />
        </div>

      </div>
    )
  }

}
