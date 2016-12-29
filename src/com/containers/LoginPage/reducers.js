import {fromJS} from 'immutable';
import * as Action from './actions'
const initialState = {
    form: {
        password: '',
        email: '',
        errorEmailHintText:'',
        errorPasswordHintText:''
    },
    isRequesting: false,
};

export default function LoginPage(state = fromJS(initialState), action) {
    switch (action.type) {
        case Action.LOGIN_FORM_CHANGE:
            return state.update('form',x=>x.merge(action.form));
        case Action.TYPE.REQUEST:
            return state.set('isRequesting',true);
        case Action.TYPE.SUCCESS:
            return state.set('isRequesting',false);
        case Action.TYPE.FAILURE:
            return state.set('isRequesting',false);
        default:
            return state;
    }
}