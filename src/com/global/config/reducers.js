import {fromJS} from 'immutable';
import {combineReducers} from 'redux-immutable';

const initialState = {
    whRate:0,
    allWHRate:0,
};

function config(state = fromJS(initialState), action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default config;