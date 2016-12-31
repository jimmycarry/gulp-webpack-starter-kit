export default {
    path:"animation",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('./index').default)
        })
    }
};