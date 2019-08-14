import React from 'react';
import { connect } from 'react-redux';
import { initializeConvo } from '../../actions/initConvoActions';
import { Form, Checkbox } from 'formsy-semantic-ui-react';
import {
  Button,
  Header,
  Container,
  Modal,
  Segment,
  Grid,
  Input as SInput,
  Form as SForm,
  Loader,
} from 'semantic-ui-react';
import TOS from './TOS';
import './Form.css';
import ReactGA from 'react-ga';

class FormView extends React.Component {
  state = {
    convoRequest: {
      survivornumber: '',
      ffname: '',
      ffnumber: '',
    },
    isModal1Open: false,
    isModal2Open: false,
    isVerified: false,
    isVerifying: false,
    appKey: '',
  };

  submitHandler = e => {
    // console.log('send text button hit');
    // console.log('from submit', this.state.convoRequest.survivorPhoneNum);
    // console.log('from submit', this.state.convoRequest.ffName);
    // console.log('from submit', this.state.convoRequest.ffPhoneNum);
    this.props.initializeConvo(this.state.convoRequest);
    // this.handleModal2Open();
    let clearedReq = {
      survivornumber: '',
      ffname: '',
      ffnumber: '',
    };
    this.setState({ convoRequest: clearedReq }, () => {
      this.handleModal2Open();
      ReactGA.event({ category: 'User', action: 'Submit Convo Form' });
    });
  }; // <- Is it this random bracket, here?
  // we good

  changeHandler({ target }) {
    this.setState(
      {
        convoRequest: {
          ...this.state.convoRequest,
          [target.name]: target.value,
        },
      },
      // () => console.log(this.state.convoRequest, 'from change'),
    );
  }

  handleModal1Open = () => {
    this.setState({ isModal1Open: !this.state.isModal1Open });
  };

  handleModal2Open = () => {
    this.setState({ isModal2Open: !this.state.isModal2Open });
  };

  changeKey = e => {
    this.setState({ appKey: e.target.value });
  };

  submitKey = e => {
    let keys = 'goblue';
    keys.includes(this.state.appKey)
      ? (function(env) {
          env.setState({ isVerifying: true });
          setTimeout(() => env.setState({ isVerified: true }), 2000);
        })(this)
      : alert('Invalid key');
  };

  render() {
    let securityView = (
      <div className="security-container">
        <p className="security-header">
          Please enter your provided App Key to continue
        </p>
        {this.state.isVerifying ? (
          <>
            {' '}
            <Loader active size="massive">
              {' '}
              Verifying...{' '}
            </Loader>{' '}
          </>
        ) : (
          <>
            <SForm onSubmit={e => this.submitKey(e)}>
              <SInput
                size="huge"
                className="security-input"
                name="appKey"
                label="App Key"
                type="password"
                fluid
                onChange={e => this.changeKey(e)}
              />
            </SForm>
            <div className="button-container">
              <Button
                type="submit"
                disabled={!this.state.appKey ? true : false}
                size="huge"
                onClick={e => this.submitKey(e)}
                style={{ backgroundColor: '#2E2F38', color: 'white' }}
                toggle
                tabIndex={0}
              >
                Submit
              </Button>
            </div>
          </>
        )}
      </div>
    );
    let formView = (
      <div className="stage">
        <div className="stage-left">
          <div className="stage-title">
            <h1>Almost there . . .</h1>
            <p>Placeholder; explanation on how to begin.</p>
            <p className="required">* Required</p>
          </div>
          <div className="lime-card" />
        </div>
        <div className="float-plane">
          <Segment className="float-box">
            <Container className="content-box">
              {/* <Form onValidSubmit={() => this.submitHandler()} size={"huge"}> */}
              <Form onValidSubmit={() => this.handleModal2Open()} size={'huge'}>
                <Grid columns={2} divided>
                  <Grid.Column>
                    <div className="text-box">
                      <h5>Your Information</h5>
                      <p>
                        Don't worry! We'll keep you anonymous, no matter what!
                        We just need your cell phone number to give you an
                        update when the recipient gets the text.
                      </p>
                    </div>
                    <Form.Group grouped>
                      <Form.Input
                        name="survivornumber"
                        label="Your Phone Number "
                        validations="isNumeric"
                        value={this.state.convoRequest.survivornumber}
                        required
                        onChange={e => this.changeHandler(e)}
                        fluid
                      />
                    </Form.Group>
                  </Grid.Column>
                  <Grid.Column>
                    <div className="text-box">
                      <h5>Recipient's Information</h5>
                      <p>
                        This person will receive the text that informs them that
                        someone in their life wants to have a hard conversation.
                      </p>
                    </div>
                    <Form.Group grouped>
                      <Form.Input
                        name="ffname"
                        label="Recipient's Name "
                        validations="isWords"
                        value={this.state.convoRequest.ffname}
                        required
                        onChange={e => this.changeHandler(e)}
                        fluid
                      />
                      <Form.Input
                        name="ffnumber"
                        label="Recipient's Phone Number "
                        validations="isNumeric"
                        value={this.state.convoRequest.ffnumber}
                        required
                        onChange={e => this.changeHandler(e)}
                        fluid
                      />
                    </Form.Group>
                  </Grid.Column>
                </Grid>
                <Container className="agree-submit">
                  <Checkbox
                    fluid
                    className="termsCheckbox"
                    name="survivorLiability"
                    label={
                      <label className="agree-checktext">
                        I accept the
                        <Modal
                          trigger={
                            <Header
                              as="h3"
                              color="#2E2F38"
                              content={'Terms of Service'}
                              onClick={this.handleModal1Open}
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
                      </label>
                    }
                    validations="isTrue"
                  />
                  <Modal
                    trigger={
                      <Button
                        size="huge"
                        style={{ backgroundColor: '#2E2F38', color: 'white' }}
                        content={'Preview Text'}
                        onValidSubmit={() => this.handleModal2Open()}
                      />
                    }
                    open={this.state.isModal2Open}
                    onClose={this.handleModal2Open}
                  >
                    <Modal.Header>
                      <div className="form-submit">
                        <text>Text Preview</text>
                        <Button
                          style={{ backgroundColor: '#2E2F38', color: 'white' }}
                          size="large"
                          onClick={() => this.submitHandler()}
                        >
                          Send Text
                        </Button>
                      </div>
                    </Modal.Header>
                    <Modal.Content>
                      <div className="preview-container">
                        <img
                          className="preview-img"
                          src="assets/messagepreview.png"
                        />
                      </div>
                    </Modal.Content>
                  </Modal>
                </Container>
              </Form>
            </Container>
          </Segment>
        </div>
      </div>
    );
    // return <>{!this.state.isVerified ? securityView : formView}</>;

    return <>{formView}</>;
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
