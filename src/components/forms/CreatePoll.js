import React from 'react'
import { Form, Button } from 'semantic-ui-react'

class CreatePoll extends React.Component {

  state ={
    pollname: "",
    optionname1: "",
    optionname2: ""
  }

  onChange = event => {
    console.log(this.state)
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
        user_id: localStorage.userId
      })
    }).then(res => res.json())
      .then(data => {console.log(data)
        // if (data.errors) {
        //   this.setState({
        //     errors: data.errors
        //   })
        // } else {
        //   this.props.loginUser(data.token, data.user_id)
        // }
      })

  }

  render(){


    return(<div>
      <Form onSubmit={this.addPoll}>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            name="pollname"
            label='Poll Name'
            placeholder='Poll Name'
            onChange={this.onChange}
            value={ this.state.pollname }
          />
          <Form.Input
            fluid
            name="optionname1"
            label='Option 1'
            placeholder='Option 1'
            onChange={this.onChange}
            value={ this.state.optionname1 }
          />
          <Form.Input
            fluid
            name="optionname2"
            label='Options 2'
            placeholder='Options 2'
            onChange={this.onChange}
            value={ this.state.optionname2 }
          />
          <Button content='Create Poll' positive />
        </Form.Group>
      </Form>


    </div>
    )
  }

}
export default CreatePoll