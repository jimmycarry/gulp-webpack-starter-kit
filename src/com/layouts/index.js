import React,{Component,PropTypes} from 'react';


class MainLayout extends Component{
    constructor(props){
        super(props);
        this.displayName = 'MainLayout';
    }

    render(){
        const {children} = this.props;
        return(
            <div>
                {children}
            </div>
        )
    }
}

export default MainLayout