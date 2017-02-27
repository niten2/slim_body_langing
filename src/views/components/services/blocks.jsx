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

        <div className="flex-1">
          <img src={object.image} />
        </div>

        <div className={ !this.isOdd(order) ? "flex-first flex-1" : "flex-1" }>

          <h2>
            { object.title }
          </h2>

          <div>
            { object.body }
          </div>

        </div>

      </div>
    )
  }
}


