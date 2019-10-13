import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

class Login extends React.Component{

  state ={
    logIn:false,
    username: "",
    password: "",
    errors: []
  }

  loginSubmit = e => {
    e.preventDefault()

    fetch("http://localhost:3000/tokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.errors){
        this.setState({
          errors: data.errors
        })
      } else {
        this.props.loginUser(data.token, data.user_id)
       // this.context.router.history.push(`/profile`)
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
  return <>
  <ul>
    {
      this.state.errors.map(error => <li>{ error }</li>)
    }
  </ul>
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form onSubmit={this.loginSubmit}>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='username'
            name='username'
            onChange={this.onChange}
            value={ this.state.username }
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            name='password'
            placeholder='password'
            onChange={this.onChange}
            value={ this.state.password }
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
  </>
}
}
export default Login