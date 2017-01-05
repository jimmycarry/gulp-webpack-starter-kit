import React,{Component,PropTypes} from 'react';
import styles from './index.less';
export default class Wrapper extends Component{
    constructor(props){
        super(props);
        this.displayName = 'Wrapper';
    }
    render(){
        const {children,...others} = this.props
        return(
            <div className={styles.container} {...others}>
                {this.props.children}
            </div>
        )
    }
}