import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
import images from "./images"
import "react-image-gallery/styles/css/image-gallery.css"
import "./index.css"

export default class Reviews extends Component {
  render() {
    return (
      <div className="style2 wrapper reviews">

        <header>
          <ImageGallery
            ref={i => this._imageGallery = i}
            items={images}
            slideInterval={4000}
            autoPlay={true}
            showPlayButton={false}
            showThumbnails={false}
            showFullscreenButton={false}
          />
        </header>

      </div>
    )
  }
}
