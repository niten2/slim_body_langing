import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'

import Index from './index'
// import Test from './test'
// import Welcome from './Welcome'

// console.log(111)

storiesOf('Footer', module)
  // .add('test', () => (
  //   <Test />
  // ))

  .add('index', () => (
    <Index />
  ))

