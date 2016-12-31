export default   {
    path: "/",
    getChildRoutes(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, [
                require('../containers/LoginPage/routes').default,
                require('../layouts/routes').default
            ])
        })
    },

    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('../containers/LoginPage/index').default,
                onEnter:()=>{console.log('enter')}
            })
        })
    },

    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('../layouts/index').MainLayout)
        })
    }
};