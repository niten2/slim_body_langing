import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery'

import texts from "./texts"
import "./index.scss"

export default class Contacts extends Component {

  render() {
    return (
      <div className="services">
        <h1> Услуги </h1>

        <div className="container">
          <BlockComponent />
        </div>

      </div>
    )
  }

}

class BlockComponent extends Component {

  render() {
    return (
      <div>
        { texts.map((object, index) =>
          <RenderBlock
            object={object}
            order={index}
            key={index}
          />
        )}
      </div>
    )
  }

}

class RenderBlock extends Component {
  render() {
    const { object, order } = this.props

    return (
      <div className="texts row align-items-center">

        <div className="col">
          <img src={object.image} />
        </div>

        <div className={ isOdd(order) ? "flex-first col" : "col" }>

          <h2>
            { object.title }
          </h2>

          <div className="col">
            { object.body }
          </div>

        </div>

      </div>
    )
  }
}

function isOdd(num) { return num % 2; }
