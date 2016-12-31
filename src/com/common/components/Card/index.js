import React,{Component,PropTypes} from 'react';
import {Paper} from 'material-ui';
import {cardStyle} from './cardStyle';
import styles from './index.less'
class Card extends Component{
    constructor(props){
        super(props);
        this.displayName = 'Card';
    }
    render(){
        const {children,images,...others} = this.props
        return(
            <Paper zDepth={1} style={cardStyle} {...others}>
                <div className={styles.img_wrapper}>
                    <img src={this.props.images}/>
                </div>
                <div className={styles.label_wrapper}>
                    {this.props.children}
                </div>
            </Paper>
        )
    }
    static propTypes ={
        images:React.PropTypes.string,
        children:React.PropTypes.node
    }
}
export default Card