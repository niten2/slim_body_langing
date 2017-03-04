import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery'
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

const images = [
  {
    original: 'static/images/reviews/1.jpg',
  },
  {
    original: 'static/images/reviews/2.jpg',
  },
  {
    original: 'static/images/reviews/3.jpg',
  },
  {
    original: 'static/images/reviews/4.jpg',
  },
  {
    original: 'static/images/reviews/5.jpg',
  },
  {
    original: 'static/images/reviews/6.jpg',
  },
]

