import {createSelector} from 'reselect';
const loginSelector = state=>state.get('LoginPage')
export const selector = createSelector([loginSelector],(login)=>{
    return{
        form:login.get('form'),
        isRequesting:login.get('isRequesting')
    }
});