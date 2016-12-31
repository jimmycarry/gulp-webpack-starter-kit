import React,{Component,PropTypes} from 'react';
import styles from './icon.less'
import {iconType} from './enum'
export default class Icon extends Component{
    constructor(props){
        super(props);
        this.displayName = 'Icon';
    }
    render(){
        return(
            <div className={styles.icon} style={iconType[this.props.iconType]}>
            </div>
        )
    }
    static propTypes={
        iconType:React.PropTypes.string
    }
}