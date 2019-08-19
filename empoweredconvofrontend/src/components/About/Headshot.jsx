import React from 'react';
import './About.css'
import { Image, Icon, Container, Card } from 'semantic-ui-react';
import './About.css';
// import Grace_Davis from './headShots/Grace_Davis.jpeg';
// boom, webpack-ed


export default function Headshot(props) {
    return (
        <Card className="headshot">
            <Image className="headshot-img" style={ props.flip ? { transform: 'rotate(90deg)'} : {}} src={require(`${props.url}`)}/>
            {/* <Image className="headshot-img" src={Grace_Davis}/> */}
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>
                </Card.Meta>
                <Card.Description>
                    {props.desc}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                <Icon name='user' />
                Social Media
                </a>
            </Card.Content>
        </Card>
    )
}
