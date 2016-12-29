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
// const layOutSelect = state => state.getIn(['Layouts','Layouts']);
// const selectors = createSelector([layOutSelect], (layout) => {
//     return {
//         index: layout.get('index')
//     }
// });
export {
    selectLocationState,
   // selectors
};
