import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery'

export default class Contacts extends Component {

  render() {
    return renderView()
  }

}

const renderView = () => (
  <Grid>
    <Clearfix />
    <Col className="reviews">
      <h1> Отзывы </h1>
      <ImageGalleryComponent />
    </Col>
  </Grid>
)


class ImageGalleryComponent extends Component {

  handleImageLoad(event) {
    // console.log('Image loaded ', event.target)
  }

  render() {

    const images = [
      {
        original: 'images/reviews/1.jpg',
        originalClass: "review-images",
      },
      {
        original: 'images/reviews/2.jpg',
        originalClass: "review-images",
      },
      {
        original: 'images/reviews/3.jpg',
        originalClass: "review-images",
      },
      {
        original: 'images/reviews/4.jpg',
        originalClass: "review-images",
      },
      {
        original: 'images/reviews/5.jpg',
        originalClass: "review-images",
      },
      {
        original: 'images/reviews/6.jpg',
        originalClass: "review-images",
      },
    ]

    return (
      <ImageGallery
        ref={i => this._imageGallery = i}
        items={images}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}
        autoPlay={false}
        showThumbnails={false}
        showFullscreenButton={false}
      />

    )
  }

}

