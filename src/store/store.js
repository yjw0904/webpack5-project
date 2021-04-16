import { applyMiddleware, createStore } from 'redux'

import createSagaMiddleware from 'redux-saga'

import { root } from '../sagas'
import { rootReducer } from './reducer'

const isDev = process.env.NODE_ENV === 'development'
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  {},
  isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(sagaMiddleware),
      )
    : applyMiddleware(sagaMiddleware),
)
sagaMiddleware.run(root)
