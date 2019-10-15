import React from 'react';
import Navigation from './containers/Navigation';
import Login from './containers/Login';
import NotFound from './components/NotFound';
import Signup from './containers/Signup';
import Profile from './containers/Profile';
import Main from './containers/Main';
import CreatePoll from './components/forms/CreatePoll';
import { Route, NavLink, Switch } from 'react-router-dom'
import AllPolls from './containers/AllPolls';

class App extends React.Component {

  state = {
    loggedInUserId: null,
    token: null
  }

  componentDidMount(){
    this.setState({
      token: localStorage.token
    })
  }

  isLoggedIn(){
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
    this.setState({
      token: null,
      loggedInUserId: null
    })
  }

  render(){

  return (<>
    <Navigation logOutUser={this.logOutUser} />
    <div className="App">
      <Switch>
      <Route path="/" exact render={() => (<Login loginUser={this.loginUser} />)} />
      <Route path="/login" render={() => (<Login loginUser={this.loginUser} />)} />
      <Route path="/signup" component={ Signup }/>
      <Route path="/profile" render={() => <Profile/>}/>
      <Route path="/polls" component={ AllPolls }/>
      <Route path="/createpoll" component={ CreatePoll }/>
      <Route exact path="/main" component={Main}/>
      <Route component={ NotFound }/>
      </Switch>
      {/* {
        this.isLoggedIn()
        <button onClick={ this.logOutUser }>LOG OUT</button>
        ?
        <>
        <button onClick={ this.logOutUser }>LOG OUT</button>
        <Main token={ this.state.token } loggedInUserId={ this.state.loggedInUserId}/>
        </>
        :
        <Login loginUser={this.loginUser}/>
      } */}
    </div>
          
    </>
  );
  }
}

export default App
