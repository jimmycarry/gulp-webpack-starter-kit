import {Router, Route, hashHistory, browserHistory, Redirect, IndexRedirect} from 'react-router';
import {Provider} from 'react-redux';
import {MuiThemeProvider} from 'material-ui';
import {syncHistoryWithStore} from 'react-router-redux';
import store from '../../stores/index';
import {selectLocationState} from '../../layouts/selectors';
import React from 'react';
const history = syncHistoryWithStore(browserHistory, store, {selectLocationState: selectLocationState()});
import Layout from '../../layouts/index'
import LoginPage from '../LoginPage/index';
import injectTapEventPlugin from 'react-tap-event-plugin'
export default function App() {
    injectTapEventPlugin();
    return (
        <MuiThemeProvider>
            <Provider store={store}>
                <Router history={history}>
                    <Route path='/' component={Layout}>
                        <IndexRedirect to='login'/>
                        <Route path="/login" component={LoginPage}/>
                    </Route>
                </Router>
            </Provider>
        </MuiThemeProvider>
    )
}