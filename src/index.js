import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import 'styles/index.scss'

// global values
if (!DEV) {
  require("lib/vk")
}

render(
  routes(),
  document.getElementById('app')
)

