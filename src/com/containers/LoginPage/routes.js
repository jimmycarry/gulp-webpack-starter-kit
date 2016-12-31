export default {
    path:"login",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('./index').default)
        })
    }
};