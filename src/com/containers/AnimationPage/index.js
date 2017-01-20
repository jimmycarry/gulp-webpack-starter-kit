import React,{Component,PropTypes} from 'react';
import Wrapper from '../../common/components/Wrapper';
import styles from './index.less';
class AnimationPage extends Component{
    constructor(props){
        super(props);
        this.displayName = 'Animation';
    }
    render(){
        return(
            <Wrapper>
                <h3 className={styles.title} style={{paddingLeft:10,paddingRight:10}}>Animation Pages</h3>
            </Wrapper>
        )
    }
}

export default AnimationPage