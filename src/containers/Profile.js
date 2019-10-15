import React from 'react'
import PollCard from '../components/PollCard'
import { Link } from 'react-router-dom'

class Profile extends React.Component{

  state = {
    user: {},
    polls: []
  }

  componentDidMount(){
    console.log(localStorage)
    console.log(localStorage.userId)
    console.log(localStorage.token)
    console.log(this.state)

    if (localStorage.userId){

    fetch(`http://localhost:3000/users/${localStorage.userId}`, {
      headers: {
        "Authorization": localStorage.token
      }
    })
    .then(res => res.json())
    .then(resp => {
      console.log(resp)
      this.setState({
        user: {username: resp.data.attributes.username, email: resp.data.attributes.email },
        polls: resp.included
      })
    })

  }//conditional closing brace
  }
  
      // this.setState({
      //   user: {username: resp.username, email: resp.email },
      //   polls: resp.polls
      // })

  render(){

    let buttonPoll = localStorage.userId ? 
    <Link to="/createpoll">
    <button> Create new Poll</button>
    </Link>
    :
    <button class="ui disabled button" disabled="" tabindex="-1">Disabled</button>

    return(<>
      {console.log('Profile this.state', this.state)}
      <h1> User Profile</h1>
      <h2> { this.state.user.username} </h2>
      <ul>
        { this.state.polls.map(poll => {
          return <PollCard pollData={poll} />
        }) }
      </ul>

      {buttonPoll}

      </>
      )
  }

}

export default Profile