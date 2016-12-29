import './common/normalize.css';
import 'babel-polyfill';
import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import App from './containers/app/app';
let rate = Math.min(document.documentElement.clientWidth / 750, document.documentElement.clientHeight / 1208);
console.log(rate);
document.documentElement.style.fontSize = 100*rate +"px";
window.addEventListener('resize',handleResize,false);
function handleResize() {
    let rate = Math.min(document.documentElement.clientWidth / 750, document.documentElement.clientHeight / 1208);
    document.documentElement.style.fontSize = 100*rate +"px";
}
ReactDOM.render(<App/>, document.getElementById('app'));
