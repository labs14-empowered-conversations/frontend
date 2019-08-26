import React from 'react';
import './About.css'
import { Image, Icon, Container, Card } from 'semantic-ui-react';
import './About.css';
// import Grace_Davis from './headShots/Grace_Davis.jpeg';
// boom, webpack-ed


export default class Headshot extends React.Component {
    constructor(props) {
        super();
        this.state = {
            mobileChange: false,
        }
    }

    forceUpdate = () => {
        if(window.innerWidth >= 801) {
          this.setState({ mobileChange: false });
        } else if (window.innerWidth <= 950) {
          this.setState({ mobileChange: true });
        }
      } 
      
      resize = () => this.forceUpdate()
    
      componentDidMount() {
        window.addEventListener('resize', this.resize)
        this.forceUpdate();
      }
    
      componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
      }

    render() {
        return (
            <Card style={{ boxShadow: "none" }} className="headshot">
                <Card.Content>
                    <img className="headshot-img" src={require(`${this.props.url}`)}/>
                    <Card.Header style={{ fontSize: "1.6rem" }}>{this.props.name}</Card.Header>
                    <Card.Meta>
                        <span style={{ fontSize: "1.2rem" }} className='date'>{this.props.position}</span>
                    </Card.Meta>
                    {!this.state.mobileChange &&
                    <Card.Description className="card-desc">
                        {this.props.desc}
                    </Card.Description>
                    }
                </Card.Content>
                {!this.state.mobileChange &&
                <Card.Content extra>
                    <a>
                    <Icon name='user' />
                    Social Media
                    </a>
                </Card.Content>
                }
            </Card>
        )
    }
}
