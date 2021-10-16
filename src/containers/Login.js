import React from 'react';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { config } from '../Constants'

class Login extends React.Component{

  state ={
    username: "",
    password: "",
    errors: [],
    toMain: false
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  loginSubmit = e => {
    e.preventDefault()
    const url = config.url.API_URL

    fetch(`${url}tokens`, {
    // fetch("http://localhost:3000/tokens", {
    // fetch("https://dis-or-dat-poll-app.herokuapp.com/tokens", {
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
      }
    })
  }

render(){
  return <>
  <p></p>
  <div name="welcome" className='welcome'>
    <h3> Welcome to... </h3>
    <p className='apptitle'>✓ DIS OR DAT ✓</p>
  </div>

  <div className="loginsignupdiv">
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
            type='password'
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
  </div>
  <p></p>
  {
    this.state.errors
    ?        
    this.state.errors.map(error => {
      return <div name="errors" className='welcome'>
        <div class="ui negative message">
        <i class="close icon"></i>
        <div class="header">
          Oops! Something went wrong....
        </div>
        <span>{ error }</span>
        </div>
        </div>
      })
    :
    null
  }
  </>
}
}
export default withRouter(Login)