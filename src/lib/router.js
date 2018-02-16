import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from 'components/layout'

export default (onUpdate) => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

