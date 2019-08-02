import React from 'react';
import { connect } from 'react-redux';
import { initializeConvo } from '../../actions/initConvoActions';
import {
  Form,
  Input,
  TextArea,
  Checkbox,
  Dropdown,
  Select,
} from 'formsy-semantic-ui-react';
import { Button, Container, Modal, Segment, Label, Grid, Divider } from 'semantic-ui-react';
import TOS from './TOS';
import './Form.css';

class FormView extends React.Component {
  state = {
    convoRequest: {
      survivorPhoneNum: '',
      ffName: '',
      ffPhoneNum: '',
    },
    isModalOpen: false,
  };

  submitHandler = e => {
    console.log('send text button hit');
    console.log('from submit', this.state.convoRequest.survivorPhoneNum);
    console.log('from submit', this.state.convoRequest.ffName);
    console.log('from submit', this.state.convoRequest.ffPhoneNum);
    this.props.initializeConvo(this.state.convoRequest);
  };

  changeHandler({ target }) {
    this.setState(
      {
        convoRequest: {
          ...this.state.convoRequest,
          [target.name]: target.value,
        },
      },
      () => console.log(this.state.convoRequest, 'from change'),
    );
  }

  handleModalOpen = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    return (
      <div className="stage">
        <div className="stage-left">
          <div className="stage-title">
            <h1>Almost there . . .</h1>
            <p>Explanation for what else a survivor has to do.</p>
            <p className="required">* Required</p>
          </div>
          <div className="lime-card"/>
        </div>
        <div className="float-plane">
          <Segment className="float-box">
            <Container className="modal-box">
              <Modal
                trigger={
                  <Button
                    content={'click to open modal'}
                    onClick={this.handleModalOpen}
                  />
                }
                open={this.state.isModalOpen}
                onClose={this.handleModalOpen}
              >
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Content>
                  <TOS />
                </Modal.Content>
              </Modal>
            </Container>
            <Grid columns={2} container className="content-box">
              <Form onValidSubmit={() => this.submitHandler()} widths="equal">
                <Grid.Column floated="left" widths={10}>
                  <Form.Group>
                    <div className="text-box">
                      <h5>Your Information</h5>
                      <p><text>
                          Don't worry! We'll keep you anonymous, no matter what! We just need your cell
                        phone number to give you an update when the recipient gets the text.
                      </text></p>
                    </div>
                    <Form.Input
                      name="ffName"
                      label="Your Name"
                      validations="isWords"
                      placeholder="Your Name"
                      onChange={e => this.changeHandler(e)}
                      fluid
                    />
                    <Form.Input
                      name="survivorPhoneNum"
                      label="Your Phone Number"
                      validations="isNumeric"
                      required
                      onChange={e => this.changeHandler(e)}
                      fluid
                    />
                  </Form.Group>
                </Grid.Column>
                <Grid.Column floated="right" widths={10}>
                  <Form.Group>
                    <div className="text-box">
                      <h5>Recipient's Information</h5>
                      <p><text>
                        This person will receive the text that informs them that someone in their life
                        wants to have a hard conversation.
                      </text></p>
                    </div>
                    <Form.Input
                      name="ffName"
                      label="Name of Friend, Family, or Loved One "
                      validations="isWords"
                      placeholder="Jane Doe"
                      required
                      onChange={e => this.changeHandler(e)}
                      fluid
                    />
                    <Form.Input
                      name="ffPhoneNum"
                      label="Phone Number of Friend, Family, or Loved One"
                      validations="isNumeric"
                      required
                      onChange={e => this.changeHandler(e)}
                      fluid
                    />
                  </Form.Group>
                </Grid.Column>
                <Divider vertical>And</Divider>
                <div className="agree-submit">
                  <Checkbox
                    name="survivorLiability"
                    label={<label>I accept the terms of service</label>}
                    validations="isTrue"
                  />
                  <Form.Button type="submit">Send Text</Form.Button>
                </div>
              </Form>
            </Grid>
          </Segment>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSending: state.initConvo.isSending,
    isSent: state.initConvo.isSent,
    sendingError: state.initConvo.sendingError,
  };
};

export default connect(
  mapStateToProps,
  { initializeConvo },
)(FormView);
