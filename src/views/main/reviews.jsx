import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

import Slider from 'react-slick'

export default class Contacts extends Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return renderView(settings)
  }

}

const renderView = (settings) => (
  <Col xs={12}>

    <h1 className="text-center"> Отзывы </h1>

    <Clearfix />
    <App />

  </Col>
)


var Carousel = require('nuka-carousel');

const App = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <Carousel slideWidth={0.75} slidesToShow={1} cellAlign="center" className="center">
        <img className="test" src="images/reviews/1.jpg"/>
        <img className="test" src="images/reviews/2.jpg"/>
        <img className="test" src="images/reviews/3.jpg"/>
        <img className="test" src="images/reviews/4.jpg"/>
        <img className="test" src="images/reviews/5.jpg"/>
        <img className="test" src="images/reviews/6.jpg"/>
      </Carousel>
    )
  }
})


