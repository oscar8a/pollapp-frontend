import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import { config } from '../Constants'

class Voting extends React.Component {

  state = {
    voteForID: null,
    errors: [],
    successfulVote: false
  }
  
  handleChange = (e) => {
    this.setState({
      voteForID: e.target.value
    })
  }
  
  castVote = (e) => {
    e.preventDefault()
    const url = config.url.API_URL
   
    fetch(`${url}votes`, {
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
      if (data.errors){
        this.setState({
          errors: data.errors
        })
      } else {
        this.setState({
          errors: [],
          successfulVote: true
        })
      }
    })




  }

  renderMessage = () => {
    if (this.state.errors.length != 0) {
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
    } else if (this.state.successfulVote) {
      return <div className="ui positive message">
        <i className="close icon"></i>
        <div className="header">
          Your Vote was successfully casted!
        </div>
      </div>
    } else {console.log("WOT!?!?")}
  }
  
  render(){

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