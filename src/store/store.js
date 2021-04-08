//import { applyMiddleware, createStore } from 'redux'
import { createStore } from 'redux'
//import createSagaMiddleware from 'redux-saga'

//import { root } from '../sagas'
import { rootReducer } from './reducer'

//const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  //applyMiddleware(sagaMiddleware),
)

//sagaMiddleware.run(root)
