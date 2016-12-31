import React,{PropTypes,Component} from 'react';

export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.displayName = 'HomePage';
    }
    render(){
        return(
            <div>
                WelCome To HomePage
            </div>
        )
    }
}