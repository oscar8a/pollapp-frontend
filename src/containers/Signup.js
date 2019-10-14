import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class Signup extends React.Component {

  state ={
    logIn:false,
    username: "",
    email: "",
    password: "",
    errors: []
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

  onChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

render(){
  return(<>
  <Form onSubmit={this.signupSubmit}>
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
export default Signup