import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery'
import images from "./images"
import "./index.scss"

export default class Contacts extends Component {

  render() {
    return (
      <Grid>
        <Col className="reviews">
          <h1> Отзывы </h1>

          <ImageGallery
            ref={i => this._imageGallery = i}
            items={images}
            slideInterval={4000}
            autoPlay={false}
            showThumbnails={false}
            showFullscreenButton={false}
          />

        </Col>
      </Grid>
    )
  }

}

