/*
 * 路由变化 记录进 全局state
 */
import {createSelector} from 'reselect';
const selectLocationState = () => {
    let prevRoutingState;
    let prevRoutingStateJS;

    return (state) => {
        const routingState = state.get('routing');
        // or state.route
        if (!routingState.equals(prevRoutingState)) {
            prevRoutingState = routingState;
            prevRoutingStateJS = routingState.toJS();
        }

        return prevRoutingStateJS;
    };
};
const homeLayoutSelect = state=>state.get('HomeLayout');
const homeLayoutSelector = createSelector(homeLayoutSelect,(homelayout)=>{
    return{
        drawerVisible:homelayout.get('drawerVisible')
    }
})
export {
    selectLocationState,
    homeLayoutSelector
};
