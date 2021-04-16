//import 'babel-polyfill'
import { all, delay, put, takeEvery } from 'redux-saga/effects'
import { get } from '../../utils/client'
import { ACTIONS } from './action_types'
import {
  setDataIsLoading,
  setDataIsLoadingComplete,
} from '../../store/app/actions'
import { setHomePageData } from '../../store/data/actions'

function* fetchHomePageData() {
  console.log('haha')
  yield put(setDataIsLoading())
  try {
    yield delay(2000)
    const res = yield get({ endpoint: 'db' })
    if (res.success === true) {
      yield put(setHomePageData(res.json))
    } else {
      throw new Error(res.message)
    }
  } catch (error) {
    console.error({
      message: error.message,
    })
  }
  yield put(setDataIsLoadingComplete())
}
export function* homePageData() {
  yield all([takeEvery(ACTIONS.FETCH_HOME_PAGE_DATA, fetchHomePageData)])
}
