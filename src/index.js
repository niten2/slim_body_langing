import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import 'styles/index.scss'

// import { Provider } from 'react-redux'
// import configureStore from './store/configureStore'
// import { syncHistoryWithStore } from 'react-router-redux'

// require('./favicon.ico')
// import '../styles/index.scss'

// const store = configureStore()

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

// render(
//   <Provider store={store}>
//     <Router history={history} routes={routes} />
//   </Provider>, document.getElementById('app')
// )

// console.log(routes())

render(
  routes(),
  document.getElementById('app')
)
