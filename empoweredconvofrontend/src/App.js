import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, register } from './actions/authActions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { Header } from 'semantic-ui-react';
import FormView from './components/Form/FormView';
import Landing from './components/LandingPage/Landing';
import About from './components/About/About';
import Nav from './components/NavBar/Bar';
import Footer from './components/Footer/Footer';
import Video from './components/Video/Video';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-145388884-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  state = {
    test: '1',
    creds: {
      username: 'admin',
      password: 'password',
    },
  };

  render() {
    return (
      <Router>
        <Nav />
        <>
          <div className="App">
            <Route exact path="/form" component={FormView} />
          </div>
          <div className="App-Landing">
            <Route exact path="/" component={Landing} />
          </div>
          <div className="App-About">
            <Route exact path="/about" component={About} />
          </div>
          <div>
            <Route
              exact
              path="/learn"
              render={props => (
                <Video {...props} fromConvo={false} size="full" />
              )}
            />
          </div>
          <div>
            <Route
              exact
              path="/ff/learn/"
              render={props => (
                <Video {...props} fromConvo={true} size="full" />
              )}
            />
          </div>
        </>
        <Footer />
      </Router>
    );
  }
}

export default connect(
  null,
  { register, login },
)(App);
