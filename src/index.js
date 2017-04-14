import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import 'styles/index.scss'

render(
  routes(),
  document.getElementById('app')
)

