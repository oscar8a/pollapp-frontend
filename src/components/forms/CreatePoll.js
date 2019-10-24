import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class CreatePoll extends React.Component {

  state ={
    pollname: "",
    optionname1: "",
    optionname2: "",
    duration: "",
    pollCreated: false
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  addPoll = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/polls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        poll_name: this.state.pollname,
        user_id: localStorage.userId,
        is_active: true,
        duration: this.state.duration 
      })
    }).then(res => res.json())
      .then(data => {
        this.addOptionsToPoll(data.id, this.state.optionname1)
        this.addOptionsToPoll(data.id, this.state.optionname2)
      })
      .then(this.setState({pollCreated: true}))
  }

  addOptionsToPoll = (pollID, optionName) => {

    fetch("http://localhost:3000/vote_options", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        poll_id: pollID,
        option_name: optionName,
      })
      })
      .then(res => res.json())
  }

  pollCreatedMessage(){
    return <div className="ui positive message">
        <i className="close icon"></i>
        <div className="header">
          Your Poll was successfully created!
        </div>
      </div>
  }

  render(){


    return(<div className="createpolldiv">
      <h1>Create Poll:</h1>
      <Form onSubmit={this.addPoll}>
        <Form.Group>
          <Form.Input
            width={6}
            fluid
            name="pollname"
            label='Poll Name'
            placeholder='Poll Name'
            onChange={this.onChange}
            value={ this.state.pollname }
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            width={6}
            fluid
            name="optionname1"
            label='Option 1'
            placeholder='Option 1'
            onChange={this.onChange}
            value={ this.state.optionname1 }
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            width={6}
            fluid
            name="optionname2"
            label='Options 2'
            placeholder='Options 2'
            onChange={this.onChange}
            value={ this.state.optionname2 }
            />
          </Form.Group>
          <Form.Input
            placeholder='Duration'
            label='Duration (minutes)'
            type='number'
            name="duration"
            width={3}
            onChange={this.onChange}
            value={ this.state.duration }
          />
          <Form.Group>
          <Button content='Create Poll' positive />
          </Form.Group>
      </Form>
      {
        this.state.pollCreated ? this.pollCreatedMessage() : null
      }
    </div>
    )
  }

}
export default withRouter(CreatePoll)