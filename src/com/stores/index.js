/**
 * @stores
 * */
import {applyMiddleware,compose} from 'redux';
import {combineReducers} from 'redux-immutable';
import {browserHistory,hashHistory} from 'react-router';
import {routerReducer,routerMiddleware,LOCATION_CHANGE} from 'react-router-redux';
import {createStore} from 'redux';
import {fromJS} from 'immutable';
import createSagaMiddleWare,{END} from 'redux-saga';
import {rootSaga} from './rootSaga';
import rootReducers from './rootReducer'
const routeInitialState= fromJS({
    locationBeforeTransitions: null,
});
const sagaMiddleWare = createSagaMiddleWare();
const middleWare =[
    sagaMiddleWare,
    routerMiddleware(browserHistory)
];

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
    switch (action.type) {
        /* istanbul ignore next */
        case LOCATION_CHANGE:
            return state.merge({
                locationBeforeTransitions: action.payload,
            });
        default:
            return state;
    }
}

// 根部 reducer
export const rootReducer = combineReducers({
    routing: routeReducer,
    ...rootReducers
});


// rehydrating state on app start: implement here...
const recoverState = () => (fromJS({}));
const composeEhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const  store = createStore(
    rootReducer,
    recoverState(),
    //composeEhancer(applyMiddleware(sagaMiddleware,routerMiddleware(browserHistory)))
    composeEhancer(applyMiddleware(...middleWare))
);
sagaMiddleWare.run(rootSaga);

export default store;