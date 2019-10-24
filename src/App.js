import React from 'react';
import Navigation from './containers/Navigation';
import Login from './containers/Login';
import NotFound from './components/NotFound';
import Signup from './containers/Signup';
import Profile from './containers/Profile';
import Main from './containers/Main';
import CreatePoll from './components/forms/CreatePoll';
import {Switch, Link, withRouter, Redirect, BrowserRouter as Router, Route} from 'react-router-dom';
import Voting from './components/Voting';
import PollResults from './containers/PollResults';
import history from './history';
import './index.css';

class App extends React.Component {

  state = {
    loggedInUserId: null,
    token: null
  }

  componentDidMount() {
    this.setState({ token: localStorage.token })
  }

  isLoggedIn() {
    return !!this.state.token
  }

  loginUser = (token, userId) => {
    localStorage.token = token
    localStorage.userId = userId
    this.setState({
      token: token,
      loggedInUserId: userId
    })
  }

  logOutUser = () => {
    delete localStorage.token
    delete localStorage.userId
    this.setState({ token: null, loggedInUserId: null })
  }

  render() {

    const loggedInViews = (<>
      <Navigation logOutUser={this.logOutUser} />
        <div className="maincontainer">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Main} />
          <Route path="/home" component={Main} />
          <Route path="/main" component={Main} />

          <Route path="/profile" component={Profile} />

          <Route path="/voting" component={Voting} />

          <Route path="/createpoll" component={CreatePoll} />

          <Route path="/polls/:id" component={PollResults} />

          <Route component={NotFound} />

        </Switch>
      </div>
      </>
    )

    const externalViews = (<>
      <Switch>
        <Route path="/" exact
          render={
            () => (<Login loginUser={this.loginUser} />)
          }
        />
        <Route path="/login"
          render={
            () => (<Login loginUser={this.loginUser} />)
          } 
        />
        <Route path="/signup"
          render={
            () => (<Signup loginUser={ this.loginUser } />)
          } 
        />
        <Route component={NotFound} />
      </Switch>
    </>)

    return (<>
      <div className="App">
        <Router history={history}>
          {
            this.isLoggedIn()
            ?
            loggedInViews
            :
            externalViews
          }
        </Router>
      </div>
    </>)
  }
}
export default withRouter(App)