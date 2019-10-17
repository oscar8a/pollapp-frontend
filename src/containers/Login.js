import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom';

class Login extends React.Component{

  state ={
    username: "",
    password: "",
    errors: []
  }

  onChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
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
        console.log(data)
        this.props.loginUser(data.token, data.user_id)
        // this.props.router.push(`/main`)
      }
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
      <Link to="/signup">
        <Button content='Sign up' icon='signup' size='big'/>
      </Link>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
  </>
}
}
export default withRouter(Login)