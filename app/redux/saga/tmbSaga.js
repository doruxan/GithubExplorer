import { takeLatest, takeEvery, call, put, select, delay } from "redux-saga/effects";
import { Base64 } from 'js-base64';
import tmbApi from "./tmbApi";
import * as $ from "../actionTypes";

const api = new tmbApi()

const $A = function (type, payload) {
  return { type, payload };
};

const reposSaga = function* (action) {
  try {
    const {data} = yield call(api.getRepos, action.payload);
    const payload =  {data, hasNext:data.length > 0 ? true : false}
    yield put($A($.REPOS_SUCCESS, payload));
  } catch (error) {
    console.log("repos-saga-error", error);
    yield put($A($.REPOS_FAILURE, error));
  }
};

const readMeSaga = function* (action) {
  try {
    const {data} = yield call(api.getReadMe, action.payload);
    const content = Base64.decode(data.content)
    yield put($A($.README_SUCCESS, content));
  } catch (error) {
    console.log("read-me-saga-error", error);
    yield put($A($.README_FAILURE, error));
  }
};

const issuesSaga = function* (action) {
  try {
    const {data} = yield call(api.getIssues, action.payload);
    const payload =  {data, hasNext:data.length > 0 ? true : false}
    yield put($A($.ISSUES_SUCCESS, payload));
  } catch (error) {
    console.log("issues-saga-error", error);
    yield put($A($.ISSUES_FAILURE, error));
  }
};

const prsSaga = function* (action) {
  try {
    const {data} = yield call(api.getPRs, action.payload);
    const payload =  {data, hasNext:data.length > 0 ? true : false}
    yield put($A($.PRS_SUCCESS, payload));
  } catch (error) {
    console.log("prs-saga-error", error);
    yield put($A($.PRS_FAILURE, error));
  }
};

const popupSaga = function* (action) {
  yield put($A($.SET_POPUP, action.payload))
  global.popUpModal.openModal()
}

// prettier-ignore
export default (rtoSaga = function* () {
  yield takeEvery($.REPOS_REQUEST, reposSaga);
  yield takeEvery($.ISSUES_REQUEST, issuesSaga);
  yield takeEvery($.PRS_REQUEST, prsSaga);
  yield takeLatest($.README_REQUEST, readMeSaga);
  yield takeLatest($.SET_POPUP_OPEN, popupSaga);
});
