import {take,call,put,fork} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga'
import * as Api from './api';
import * as Action from './actions';
function* requestLogin (action) {
    try{
        let  res = yield call(Api.login,action.data);
        yield put(Action.operation.success(res,action.data))
    }
    catch(e){
        yield put(Action.operation.failure(e,action.data))
    }

}
function *watchSaga() {
    yield takeLatest(Action.TYPE.REQUEST,requestLogin);
}
export default function* loginSaga () {
    yield fork(watchSaga);
}