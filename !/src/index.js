import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import 'styles/index.scss'

// document.getElementById("app").remove()
// var test = document.createElement('div')
// test.id = 'app'
// document.body.appendChild(test)

render(
  routes(),
  document.getElementById('app')
)

