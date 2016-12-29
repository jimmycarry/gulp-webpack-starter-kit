import {fork, cancel, take, put} from 'redux-saga/effects';
import configSagas from '../global/config/sagas';
import LoginSagas from '../containers/LoginPage/sagas'
let BSagaList = [
    configSagas
];
let GSagaList = [
    LoginSagas
];

const BforkList = BSagaList.map(item => {
    return fork(item);
});

const GforkList = GSagaList.map(item => {
    return fork(item);
});

export const rootSaga = function*() {
    const GTask = yield GforkList;
    const BTask = yield BforkList;
};