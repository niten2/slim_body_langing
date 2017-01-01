import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import auth from 'auth'

// import authProvider from 'lib/auth'

// Other pages
import Notfound from 'views/shared/not_found'

// Admin
// import AdminLayout from 'views/admin/layout'
// import AdminDashboard from 'views/admin/dashboard'
// import AdminCallBack from 'views/admin/call_back'
// import AdminEmail from 'views/admin/email'
// import AdminAppartaments from 'views/admin/appartaments'
// import AdminAppartament from 'views/admin/appartament'
// import AdminUpload from 'views/admin/upload'

// Login
// import LoginLayout from 'views/login/layout'
import Login from 'views/auth/login'

// App
import Layout from 'views/layout'

// posts
import Post from 'views/posts'
import ShowPost from 'views/posts/show'
import NewPost from 'views/posts/new'
import EditPost from 'views/posts/edit'

// users
import User from 'views/users'

// comments
import Comment from 'views/comments'

// import About from 'views/user/about'
// import Order from 'views/user/order'
// import Contacts from 'views/user/contacts'
// import Appartament from 'views/user/appartament'

function handleRootRouteEnter (nextState, replaceState) {
  const regHashMask = /^#\/?/
  const { hash } = nextState.location
  const isHashedRoute = regHashMask.test(hash)
  if (isHashedRoute) {
    const newPathname = hash.replace(regHashMask, '/')
    replaceState(null, newPathname)
  }
}

// const requireAuth = (nextState, replace) => {
//   if (auth.hasNotToken()) {
//     replace({
//       pathname: '/auth',
//       state: { nextPathname: nextState.location.pathname }
//     })
//   }
// }

export default (onUpdate) => {

  return (
	  <Router history={ browserHistory } onUpdate={onUpdate}>

      <Route
        path='/'
        component={ Layout }
        onEnter={ ( nextState, replaceState ) => handleRootRouteEnter(nextState, replaceState) }
      >
        <IndexRedirect to="/posts" />

        <Route path="/posts" component={ Post } />
        <Route path="/posts/new" component={ NewPost } />
        <Route path="/posts/:id" component={ ShowPost } />
        <Route path="/posts/:id/edit" component={ EditPost } />

        <Route path="/users" component={ User } />
        <Route path="/comments" component={ Comment } />

        <Route path="/Login" component={ Login } />
      </Route>

      <Route path="*" component={ Notfound } />

    </Router>
  )
}

