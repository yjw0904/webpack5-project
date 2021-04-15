import { all } from 'redux-saga/effects'
import { homePageData } from './home_page/sagas'
export function* root() {
  yield all([homePageData()])
}
