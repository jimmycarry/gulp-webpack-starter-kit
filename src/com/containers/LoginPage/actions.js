import {action,apiAction} from '../../utils/actionUtils';
export const LOGIN_FORM_CHANGE = 'LOGIN_FORM_CHANGE';
export const formChange =field=>action(LOGIN_FORM_CHANGE,field);

export const {TYPE,operation} = apiAction('LOGIN')