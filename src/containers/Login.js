import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { authenticate } from '../actions/AuthActions'

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    //Check this code again
    this.authenticate(this.state)
    window.alert("You're logged in")

  }

  render(){
  return(
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name ='username'
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='username'
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />
          <Form.Input
            name ='password'
            icon='lock'
            iconPosition='left'
            label='Password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
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
  )}
}
export default Login