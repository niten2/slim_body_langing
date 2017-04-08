import React, { PropTypes, Component } from 'react'
import ImageGallery from 'react-image-gallery'
import images from "./images"
import "./index.scss"

export default class Contacts extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col reviews">
            <h1> Отзывы </h1>

            <ImageGallery
              ref={i => this._imageGallery = i}
              items={images}
              slideInterval={4000}
              autoPlay={false}
              showThumbnails={false}
              showFullscreenButton={false}
            />

          </div>
        </div>
      </div>
    )
  }

}

