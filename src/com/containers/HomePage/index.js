import React,{PropTypes,Component} from 'react';
import Card from '../../common/components/Card';
import Wrapper from '../../common/components/Wrapper';
export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.displayName = 'HomePage';
    }
    render(){
        return(
            <Wrapper>
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
                 <Card
                    images='./assets/group-vs-group.jpg'
                >
                    My Baby
                </Card>
            </Wrapper>
        )
    }
}