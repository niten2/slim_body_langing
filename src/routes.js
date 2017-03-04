import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'

import Layout from './components/layout'
// import { Route, IndexRoute } from 'react-router'
// import HomePage from './components/HomePage'
// import FuelSavingsPage from './containers/FuelSavingsPage' // eslint-disable-line import/no-named-as-default
// import AboutPage from './components/AboutPage'
// import NotFoundPage from './components/NotFoundPage'

export default (onUpdate) => {
  return (
    <Router history={ browserHistory } onUpdate={onUpdate}>
      <Route path="/" component={ Layout } />
    </Router>
  )
}
    // <Route path="fuel-savings" component={FuelSavingsPage}/>
    // <Route path="about" component={AboutPage}/>
    // <Route path="*" component={NotFoundPage}/>
