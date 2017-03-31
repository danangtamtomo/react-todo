import {createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const store = createStore(reducers, compose(
  applyMiddleware(thunk, logger),
  window.devToolsExtensions ? window.devToolsExtensions : f => f
))

export default store