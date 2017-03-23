// import { configure } from '@kadira/storybook';
// function loadStories() {
//   require('../stories');
// }
// configure(loadStories, module);

import { configure, storiesOf, action } from '@kadira/storybook'
import React, { Component } from 'react'

import "../src/styles/index.scss"

// import StoryWrapper from './wrapper/StoryWrapper'
// import StyleWrapper from './wrapper/StyleWrapper'

// const CenterDecorator = (story) => (
//   <div style={{ textAlign: "center" }}>
//     {story()}
//   </div>
// )


function loadStories() {

  const storybook = {
    action: action,
    storiesOf: (...args) => {
      return storiesOf(...args)
        // .addDecorator(CenterDecorator)
        .addDecorator((story) => (
          <div>
            { story() }
          </div>
        ))
    },
  }

  const modules = require('glob-loader!./story.pattern')

  Object.values(modules).forEach((module) => {
    if (typeof module == 'function') { module(storybook) }
  })

}

configure(loadStories, module)
