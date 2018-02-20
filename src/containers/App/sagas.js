import { takeLatest, call, put } from 'redux-saga/effects';

import { getAPIDataLoaded, getAPIDataError } from './actions';

import {
  GET_API_DATA,
} from './constants';

const fetchData = (url, options) => {
  const fetchRequest = new Request(url, options);

  return fetch(fetchRequest)
    .then((response) => (
      response.json().then((result) => ({ result }))
    ))
    .catch((error) => ({ error }));
};

function* getApiData(action) {
  const term = action.data ? `&term=${action.data}` : '';
  const { result, error } = yield call(fetchData, `https://itunes.apple.com/search?entity=musicVideo${term}`, { method: 'get' });

  if (error) {
    yield put(getAPIDataError(error));
  }

  yield put(getAPIDataLoaded(result));
}

function* apiData() {
  yield takeLatest(GET_API_DATA, getApiData);
}

export default apiData;
