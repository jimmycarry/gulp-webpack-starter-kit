import React,{PropTypes,Component} from 'react';
import Card from '../../common/components/Card';
export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.displayName = 'HomePage';
    }
    render(){
        return(
            <div style={{padding:'0.20rem',marginTop:'1.0rem'}}>
                <Card
                    images='./assets/fire-rate.jpg'
                >
                    New Plugin: Weapon
                </Card>

                <Card
                    images='./assets/multiple-anims.jpg'
                >
                    Animation
                </Card>
                <Card
                    images='./assets/group-vs-group.jpg'
                >
                    ARCADE PHYSICS
                </Card>
            </div>
        )
    }
}