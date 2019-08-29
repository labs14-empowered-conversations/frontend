import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import {
  Image,
  Icon,
  Container,
  Card,
  Responsive,
  Segment,
  Button,
  Header,
} from 'semantic-ui-react';
import componentUpdate from 'redux-state-manage';
import Headshot from './Headshot';
import Parallax from 'react-rellax';

export default class About extends React.Component {
  constructor(props) {
    super();
    this.state = {
      mobileChange: false,
    };
  }

  forceUpdate = () => {
    window.innerWidth >= 500
      ? this.setState({ mobileChange: false })
      : this.setState({ mobileChange: true });
  };

  resize = () => this.forceUpdate();

  componentDidMount() {
    componentUpdate.setState();
    window.addEventListener('resize', this.resize);
    this.forceUpdate();
  }

  componentWillUnmount() {
    componentUpdate.setState();
    window.removeEventListener('resize', this.resize);
  }

  render() {
    return (
      <Container fluid className="aboutContainer">
        {/* <Container fluid> */}
        {!this.state.mobileChange && (
          <div style={{ width: '100%' }}>
            <Parallax speed={3} centered vertical={false} horizontal={true}>
              <Segment.Group
                className="wwd-container"
                style={{
                  backgroundColor: 'white',
                  zIndex: '1',
                  margin: '0 auto',
                }}
                basic={true}
                raised
                fluid
              >
                <Segment
                  className="wwd-header"
                  basic={true}
                  size={'huge'}
                  padded={'very'}
                >
                  <Header as="h1" size={'huge'}>
                    What LOREM we IPSUM{' '}
                  </Header>
                </Segment>
                <Segment.Group
                  style={{ border: 'none' }}
                  basic={true}
                  horizontal
                  size={'huge'}
                >
                  <Segment
                    className="wwd-text"
                    style={{ border: 'none' }}
                    basic={true}
                    size={'big'}
                    padded={'very'}
                  >
                    <Header as="h2">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Deserunt nihil assumenda ullam accusantium, expedita ut,
                      labore corrupti officiis laudantium aut voluptatibus eum!
                      Aut assumenda iure ex itaque at veniam quam?
                    </Header>
                  </Segment>
                  <Segment.Group
                    style={{ border: 'none', boxShadow: 'none' }}
                    basic={true}
                    size={'huge'}
                  >
                    <Segment
                      className="wwd-text"
                      style={{ border: 'none' }}
                      basic={true}
                      size={'big'}
                      padded={'very'}
                    >
                      <Header as="h2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam atque quisquam veniam expedita quod eos facere
                        eligendi modi obcaecati unde debitis rem, veritatis iure
                        architecto earum error doloribus deleniti iusto.
                      </Header>
                    </Segment>
                    <Segment
                      style={{ border: 'none' }}
                      basic={true}
                      floated="right"
                      compact
                    >
                      <button
                        className="button wwd-button"
                        onClick={() => this.props.history.push('/form')}
                      >
                        Use The LOREM{' '}
                      </button>
                    </Segment>
                  </Segment.Group>
                </Segment.Group>
              </Segment.Group>
            </Parallax>
          </div>
        )}
        <Headshot
          url="./headShots/banana.jpg"
          name="Banana"
          position="Lead Banana"
          desc="Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana"
        />
        <Headshot
          url="./headShots/banana.jpg"
          name="Banana"
          position="Lead Banana"
          desc="Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana"
        />
        <Headshot
          url="./headShots/banana.jpg"
          name="Banana"
          position="Lead Banana"
          desc="Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana"
        />
        <Headshot
          url="./headShots/banana.jpg"
          name="Banana"
          position="Lead Banana"
          desc="Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana"
        />
        <Headshot
          url="./headShots/banana.jpg"
          name="Banana"
          position="Lead Banana"
          desc="Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana"
        />
        <Headshot
          url="./headShots/banana.jpg"
          name="Banana"
          position="Lead Banana"
          desc="Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana"
        />
        <Headshot
          url="./headShots/banana.jpg"
          name="Banana"
          position="Lead Banana"
          desc="Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana"
        />
        <Headshot
          url="./headShots/banana.jpg"
          name="Banana"
          position="Lead Banana"
          desc="Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana
          Banana Banana Banana banana banana banana Banana banana Banana banana"
        />
      </Container>
    );
  }
}
