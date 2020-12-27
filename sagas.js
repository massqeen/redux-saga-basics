import { put, takeEvery, all, call } from 'redux-saga/effects';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function* helloSaga() {
  console.log('Hello, Sagas!');
}

// worker Saga
export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

// Saga-watcher
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
