import { ACTIONS } from './action_types'
const INITIAL_STATE = {
  dataIsLoading: false,
}
export const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SET_DATA_IS_LOADING:
      return {
        ...state,
        dataIsLoading: true,
      }
    case ACTIONS.SET_DATA_IS_LOADING_COMPLETE:
      return {
        ...state,
        dataIsLoading: false,
      }
    default:
      return state
  }
}
