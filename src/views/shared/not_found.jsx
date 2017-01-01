import React, { Component } from 'react'
import { Content } from 'shared/components'

export default class NotFound extends Component {
  render() {
    return (
      <div className="text-center">
        <span className="rubix-icon icon-mfizz-ghost icon-page-not-found" />
        <h1>Page not found!</h1>
      </div>
    )
  }
}
