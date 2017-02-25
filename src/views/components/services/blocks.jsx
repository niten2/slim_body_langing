import React, { PropTypes, Component } from 'react'
import texts from "./texts"

export default class BlockComponent extends Component {

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

  isOdd(num) {
    return num % 2;
  }

  render() {
    const { object, order } = this.props

    return (
      <div className="texts row align-items-center">

        <div className="col">
          <img src={object.image} />
        </div>

        <div className={ !this.isOdd(order) ? "flex-first col" : "col" }>

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


