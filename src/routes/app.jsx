import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import auth from 'auth'

// import authProvider from 'lib/auth'

// Other pages
import Notfound from 'views/shared/not_found'
import Layout from 'views/layout'
import Main from 'views/main'
// import Test from 'views/test'

export default (onUpdate) => {
  return (
	  <Router history={ browserHistory } onUpdate={onUpdate}>
      <Route path="/" component={ Main } />
      <Route path="*" component={ Notfound } />
    </Router>
  )
}

      // <Route
      //   path='/'
      //   component={ Layout }
      //   onEnter={ ( nextState, replaceState ) => handleRootRouteEnter(nextState, replaceState) }
      // >
      //   <IndexRedirect to="/" />

      //   <Route path="/" component={ Main } />
      // </Route>


        // <Route path="/posts/new" component={ NewPost } />
        // <Route path="/posts/:id" component={ ShowPost } />
        // <Route path="/posts/:id/edit" component={ EditPost } />

        // <Route path="/users" component={ User } />
        // <Route path="/comments" component={ Comment } />

        // <Route path="/Login" component={ Login } />
