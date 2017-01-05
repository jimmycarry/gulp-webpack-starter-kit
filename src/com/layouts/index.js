import React, {Component, PropTypes} from 'react';
import {AppBar, Drawer, ListItem, makeSelectable, List} from 'material-ui';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'
class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'MainLayout';
    }

    render() {
        const {children} = this.props;
        return (
            <div>
                {children}
            </div>
        )
    }
}
import {style, titleStyle, iconLeftStyle,drawerStyle,listItemStyle} from './homeStyle';
import {homeLayoutSelector} from './selectors';
import {openDrawer} from './actions';
import {location,numlocation} from './locationEnum';
import Icon from './component/icon';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './routes.css';
const SeletableList = makeSelectable(List);
class HomeLayout extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'HomeLayout';
    }

    componentDidMount() {
        console.log(this.props.location.pathname)
    }

    render() {
        return (
            <div style={{overflow:"hidden"}}>
                <AppBar
                    title="Phaser Demo"
                    style={style}
                    titleStyle={titleStyle}
                    iconStyleLeft={iconLeftStyle}
                    onLeftIconButtonTouchTap={this.handleTouchTap}
                />
                <Drawer
                    open={this.props.drawerVisible}
                    docked={false}
                    onRequestChange={(open) => {
                        this.handleTouchTap()
                    }}
                    containerStyle={drawerStyle}
                >
                    <SeletableList
                        value={location[this.props.location.pathname]}
                        onChange={this.handleRouteChange}
                    >
                        <ListItem
                            value="1"
                            primaryText="Home"
                            leftIcon={(<Icon iconType='all'/>)}
                            innerDivStyle={listItemStyle}
                        />
                        <ListItem
                            value="2"
                            primaryText="Animation"
                            leftIcon={(<Icon iconType='animation'/>)}
                            innerDivStyle={listItemStyle}
                        />
                    </SeletableList>

                </Drawer>
                {/*this.props.children*/}
                {
                    <ReactCSSTransitionGroup 
                        transitionEnter={true} 
                        transitionName='route' 
                        transitionEnterTimeout={500} 
                        transitionLeaveTimeout={1000}>
                        {React.cloneElement(this.props.children,{key:this.props.location.pathname})}
                    </ReactCSSTransitionGroup>
                }
            </div>
        )
    }

    handleTouchTap = (e) => {
        this.props.openDrawer(!this.props.drawerVisible);
    };
    handleRouteChange = (e,index) => {
        console.log(e,index);
        browserHistory.push({pathname:numlocation[index]});
        this.props.openDrawer(!this.props.drawerVisible);
    }
}
HomeLayout = connect(homeLayoutSelector, {
    openDrawer
})(HomeLayout);
export  {
    MainLayout,
    HomeLayout
}