import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class Voting extends React.Component {

  state = {
    voteForID: null
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
    .then(data => console.log(data))




  }
  
  render(){
    console.log(this.props.location.state)

    const pollData = this.props.location.state.polldata

    return(<div>
      <Form onSubmit={this.castVote}>
        <Form.Group grouped>
          <label><h1>{pollData.poll_name}</h1></label>
          {
            pollData.vote_options.map(option => {
              return <Form.Radio
                key={option.id}
                label={option.option_name}
                value={option.id}
                // checked={value === option.option_name}
                control='input'
                type='radio'
                name="voteoption"
                onChange={this.handleChange}
            />
            })
          }

        {/* <Form.Field
          label='That one'
          control='input'
          type='radio'
          name='votename'
        /> */}
        </Form.Group>
        <Button>Submit</Button>
      </Form>
    </div>)
  }
}
export default withRouter(Voting)