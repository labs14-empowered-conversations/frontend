import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Button,
} from 'semantic-ui-react';

export default class SidebarExampleVisible extends React.Component {
  state = { visible: true };
  segmentRef = createRef();

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleClick = () => this.setState({ visible: !this.state.visible });

  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    return (
      <div style={{ width: '140px' }}>
        <Icon
          className="fa icon sidebar"
          size={'huge'}
          style={{ display: !visible ? 'none' : 'block', float: 'right' }}
          onClick={this.handleClick}
        />

        <div
          style={{
            position: 'fixed',
            zIndex: 1500,
            width: '140px',
            top: '0px',
            border: 'none',
          }}
        >
          {/* <Button.Group style={{ display: 'flex', flexWrap: 'wrap' }}> */}
          {/* <Button onClick={this.handleClick}>Show sidebar</Button> */}
          {/* </Button.Group> */}
          <Sidebar.Pushable
            as={Segment}
            style={{
              position: 'fixed',
              zIndex: 1500,
              opacity: '0.95',
              // display: visible ? 'none' : 'block',
              border: 'none',
              color: 'green',
              marginTop: '0px',
            }}
          >
            <Sidebar
              as={Menu}
              animation="overlay"
              direction="right"
              icon="labeled"
              inverted
              target={this.segmentRef}
              vertical
              style={{ paddingTop: '30px' }}
              visible={!visible}
              width="thin"
              color="black"
            >
              <Menu.Item as="a" onClick={this.handleClick}>
                <Icon name="close" />
                Close Menu
              </Menu.Item>
              <Link to="/">
                <Menu.Item as="a">
                  <Icon name="home" size={'massive'} />
                  Landing
                </Menu.Item>
              </Link>
              <Link to="/about">
                <Menu.Item as="a">
                  <Icon name="user" />
                  About
                </Menu.Item>
              </Link>
              <Link to="/learn">
                <Menu.Item as="a">
                  <Icon name="video" />
                  Learn
                </Menu.Item>
              </Link>
              <Link to="/form">
                <Menu.Item as="a">
                  <Icon name="settings" />
                  Use the Tool
                </Menu.Item>
              </Link>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment
                style={{
                  width: '140px',
                  height: '100vh',
                  display: visible ? 'none' : 'block',
                }}
                basic
              ></Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </div>
    );
  }
}
