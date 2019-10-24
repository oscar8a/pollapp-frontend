import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class Voting extends React.Component {

  state = {
    voteForID: null, 
    message: null,
    errors: []
  }
  
  handleChange = (e) => {
    this.setState({
      voteForID: e.target.value
    })
    // console.log(e.target.value)
    // console.log(this.state)
  }
  
  castVote = (e) => {
    e.preventDefault()
    console.log(this.state)
   
    
    fetch("http://localhost:3000/votes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: localStorage.userId,
        vote_option_id: this.state.voteForID
      })
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      if (data.errors){
        this.setState({
          message: null,
          errors: data.errors
        })
      } else {
        this.setState({
          errors: [],
          message: data.message
        })
      }
    })




  }

  renderMessage = () => {
    if (!!this.state.message) {
      return <div className="ui positive message">
        <i className="close icon"></i>
        <div className="header">
          {this.state.message}
        </div>
      </div>
    } else if (this.state.errors.length != 0) {
      console.log(this.state.errors)
      return <div className="ui negative message">
        <i className="close icon"></i>
        <div className="header">
          Oops! Something went wrong...
        </div>
          {
            this.state.errors.map(error => {
              return <p key={error.index}>{ error }</p>
            })
          }
        </div>
    } else { console.log("No error or messages")}
  }
  
  render(){
    console.log(this.props.location.state)
    console.log(this.state)

    const pollData = this.props.location.state.polldata

    return(<div className="profilecenter">
      <Form onSubmit={this.castVote}>
        <Form.Group grouped>
          <label><h1>{pollData.poll_name}</h1></label>
          <h4> choose who to cast your vote for </h4>
          {
            pollData.vote_options.map(option => {
              return <Form.Radio
                key={option.id}
                label={option.option_name}
                value={option.id}
                control='input'
                type='radio'
                name="voteoption"
                onChange={this.handleChange}
            />
            })
          }
        </Form.Group>
        <Button positive>Submit</Button>
      </Form>
      {
        this.renderMessage()
      }
    </div>)
  }
}
export default withRouter(Voting)