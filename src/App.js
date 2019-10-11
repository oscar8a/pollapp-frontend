import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './containers/Navigation';
import Login from './containers/Login';
import Profile from './containers/Profile';
import Main from './containers/Main';

class App extends React.Component {

  state = {
    loggedInUserId: null,
    token: null
  }

  loginUser = (token, userId) => {
    localStorage.token = token
    localStorage.userId = userId
    this.setState({
      token: token,
      loggedInUserId: userId
    })
  }

  render(){

    const userViews = (
      <div>
        <Navigation />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/main" component={Main}/>
        <Route exact path="/profile" component={Profile}/>
      </div>
    )


  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Login loginUser={this.loginUser}/>
    </div>
  );
  }
}

export default App;
