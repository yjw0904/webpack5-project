import { combineReducers } from 'redux'

import { data } from './data/reducer'
import { app } from './app/reducer'

export const rootReducer = combineReducers({
  data,
  app,
})
