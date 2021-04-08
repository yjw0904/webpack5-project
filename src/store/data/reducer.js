import { ACTIONS } from './action_types'

const INITIAL_STATE = {
  homePage: {
    data: [
      {
        name: '2021-03-26',
        IBM: 136.38,
        AAPL: 121.21,
        AMZN: 618.71,
      },
      {
        name: '2021-03-25',
        IBM: 133.07,
        AAPL: 120.59,
        AMZN: 640.39,
      },
      {
        name: '2021-03-24',
        IBM: 130.62,
        AAPL: 120.09,
        AMZN: 630.27,
      },
      {
        name: '2021-03-23',
        IBM: 130.46,
        AAPL: 122.54,
        AMZN: 662.16,
      },
      {
        name: '2021-03-22',
        IBM: 130.55,
        AAPL: 123.39,
        AMZN: 670.0,
      },
      {
        name: '2021-03-19',
        IBM: 128.9,
        AAPL: 119.99,
        AMZN: 2500,
      },
      {
        name: '2021-03-18',
        IBM: 130.06,
        AAPL: 120.53,
        AMZN: 654.87,
      },
    ],
  },
}

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
