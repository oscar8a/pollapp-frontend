import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom';

class PollCard extends React.Component {

  state = {
    isActive: null,
    dateCreated: null
  }

  componentDidMount(){
    const pollAttributes = this.props.pollData.attributes;
    
    this.setState({
      isActive: pollAttributes.is_active,
      pollID: pollAttributes.id,
      dateCreated: pollAttributes.create_at
    })
  }

  closePoll = (e) => {
    console.log("Close Poll Function called")
    
    fetch(`http://localhost:3000/polls/${this.state.pollID}`, {
    // fetch(`https://dis-or-dat-poll-app.herokuapp.com/polls/${this.state.pollID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        is_active: false
      })
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          isActive: data.is_active
        })
      })
  }
  
  render(){
    // const pollData = this.props.pollData
    const pollAttributes = this.props.pollData.attributes;
    // console.log(pollAttributes)
    
  return(<>
    <Card>
      <Image src='https://iconsplace.com/wp-content/uploads/_icons/000080/256/png/poll-topic-icon-9-256.png' className='image'/>
      <Card.Content >
      <div className="ui center aligned header">
        { pollAttributes.poll_name }
      </div>
      </Card.Content>

      <Card.Description>
        <ul>
        {
          pollAttributes.vote_options.map(option => {
            return <li key={option.id}>
              {option.option_name}
            </li>
          })
        }
        </ul>
      </Card.Description>

      <Card.Content extra>
        {/* ISACTIVE?  SHOW VOTES CASTED TOTAL : SEE RESULTS BUTTON */}
        {
          pollAttributes.is_active
          ?
          <div>
          <Icon name='checkmark' />
            {
             pollAttributes.votes.length
            } Votes 
          </div>
          :
          <Link to={`/polls/${pollAttributes.id}`}>
          {/* <Link to={{pathname: `/polls/${pollAttributes.id}`, state: {polldata: pollAttributes} }}> */}
          <Button primary>See Poll Results</Button>
          </Link>
        }
      </Card.Content>

      <Card.Content>
        {/* ISLOGGED USER SAME AS POLL CREATOR?  
        SHOW CLOSE POLL BUTTON : SHOW DISABLED BUTTON */}
        {
          Number(localStorage.userId) === pollAttributes.user_id && pollAttributes.is_active
          ?
          <Button negative onClick={this.closePoll} >Close Voting</Button>
          :
          <Button disabled>Close Voting</Button>
        }
      </Card.Content>

      <Card.Content>
        {
          Number(localStorage.userId) === pollAttributes.user_id 
          ?
          "You Created This Poll / Voting Disabled"
          :
          this.state.isActive
          ?
          <Link to={{pathname: "/voting", state: {polldata: pollAttributes} }}>
            <Button positive >Cast a Vote</Button>
          </Link>
          : 
          <Button disabled >Cast a Vote</Button>
        }
      </Card.Content>
    </Card>
  </>)
  }
}
export default withRouter(PollCard)