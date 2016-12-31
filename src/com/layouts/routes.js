export default {
    getChildRoutes(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, [
                require('../containers/HomePage/routes').default,
                require('../containers/AnimationPage/routes').default
            ])
        })
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('../containers/HomePage/index'),
            })
        })
    },
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('./index').HomeLayout)
        })
    }
}