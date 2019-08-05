import React from 'react';
import { connect } from 'react-redux';
import { initializeConvo } from '../../actions/initConvoActions';
import { Form, Checkbox } from 'formsy-semantic-ui-react';
import { Button, Container, Modal, Segment, Grid } from 'semantic-ui-react';
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
                    content={'Terms of Service'}
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
            <Container className="content-box">
              <Form onValidSubmit={() => this.submitHandler()}>
                <Grid columns={2} divided>
                  <Grid.Column>
                    <div className="text-box">
                      <h5>Your Information</h5>
                      <p><text>
                        Don't worry! We'll keep you anonymous, no matter what! We just need your cell
                        phone number to give you an update when the recipient gets the text.
                      </text></p>
                    </div>
                    <Form.Group grouped>
                      <Form.Input
                        name="ffName"
                        label="Your Name"
                        validations="isWords"
                        onChange={e => this.changeHandler(e)}
                        fluid
                      />
                      <Form.Input
                        name="survivorPhoneNum"
                        label="Your Phone Number "
                        validations="isNumeric"
                        required
                        onChange={e => this.changeHandler(e)}
                        fluid
                      />
                    </Form.Group>
                  </Grid.Column>
                  <Grid.Column>
                    <div className="text-box">
                    <h5>Recipient's Information</h5>
                      <p><text>
                        This person will receive the text that informs them that someone in their life
                        wants to have a hard conversation.
                      </text></p>
                    </div>
                    <Form.Group grouped>
                      <Form.Input
                        name="ffName"
                        label="Recipient's Name "
                        validations="isWords"
                        required
                        onChange={e => this.changeHandler(e)}
                        fluid
                      />
                      <Form.Input
                        name="ffPhoneNum"
                        label="Recipient's Phone Number "
                        validations="isNumeric"
                        required
                        onChange={e => this.changeHandler(e)}
                        fluid
                      />
                    </Form.Group>
                  </Grid.Column>
                </Grid>
                <Container className="agree-submit">
                  <Checkbox
                    name="survivorLiability"
                    label={<label>I accept the terms of service</label>}
                    validations="isTrue"
                  />
                  <Form.Button type="submit">Send Text</Form.Button>
                </Container>
              </Form>
            </Container>
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
