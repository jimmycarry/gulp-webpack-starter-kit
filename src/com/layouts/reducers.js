import {fromJS} from 'immutable';
import * as Action from './actions'
const initialState={
    drawerVisible:false
};
export function HomeLayout(state=fromJS(initialState),action) {
    switch (action.type){
        case Action.OPEN_DRAWER:
            return state.set('drawerVisible',action.visible);
        default:
            return state;
    }
}