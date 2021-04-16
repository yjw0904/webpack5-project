import { ACTIONS } from './action_types'

const INITIAL_STATE = {}

export const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SET_HOME_PAGE_DATA:
      return {
        ...state,
        homePage: action.data,
      }
    default:
      return state
  }
}
