import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery'

export default class Contacts extends Component {

  render() {
    return (
      <Grid>
        <Clearfix />
        <Col className="reviews">
          <h1> Отзывы </h1>
          <ImageGalleryComponent />
        </Col>
      </Grid>
    )
  }

}

class ImageGalleryComponent extends Component {

  render() {

    const images = [
      {
        original: 'images/reviews/1.jpg',
      },
      {
        original: 'images/reviews/2.jpg',
      },
      {
        original: 'images/reviews/3.jpg',
      },
      {
        original: 'images/reviews/4.jpg',
      },
      {
        original: 'images/reviews/5.jpg',
      },
      {
        original: 'images/reviews/6.jpg',
      },
    ]

    return (
      <ImageGallery
        ref={i => this._imageGallery = i}
        items={images}
        slideInterval={4000}
        autoPlay={true}
        showThumbnails={false}
        showFullscreenButton={false}
      />

    )
  }

}
