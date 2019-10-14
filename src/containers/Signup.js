import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { signup } from '../actions/AuthActions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Signup extends React.Component {

  state ={
    username: "",
    email: "",
    password: ""
  }
  // state ={
  //   logIn:false,
  //   username: "",
  //   email: "",
  //   password: "",
  //   errors: []
  // }

  onChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.props.signup(this.state)) {
      this.props.history.push('profile')
      window.alert("You have Signed Up!")
    } else {
      window.alert("There was an issue creating your account")
    }
  }

  signupSubmit = e => {
    e.preventDefault()

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(res => res.json())
      .then(data => {
        if (data.errors) {
          this.setState({
            errors: data.errors
          })
        } else {
          this.props.loginUser(data.token, data.user_id)
        }
      })
  }



render(){
  return(<>
  <Form onSubmit={this.handleSubmit}>
    <Form.Field>
      <label>Username</label>
      <input name='username' placeholder='Username' onChange={this.onChange}
            value={ this.state.username}/>
    </Form.Field>
    <Form.Field>
      <label>E-mail</label>
      <input name='email' placeholder='E-mail' onChange={this.onChange}
            value={ this.state.email}/>
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input name='password' placeholder='Password' type='password' onChange={this.onChange}
            value={ this.state.password}/>
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  </>)
}
}
export default Signup = withRouter(connect(null, {signup})(Signup));