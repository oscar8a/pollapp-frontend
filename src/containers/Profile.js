import React from 'react'
import PollCard from './PollCard'

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
    fetch(`http://localhost:3000/users/${localStorage.userId}`, {
      headers: {
        "Authorization": localStorage.token
      }
    })
    .then(res => res.json())
    .then(resp =>   this.setState({
    user: {username: resp.data.attributes.username, email: resp.data.attributes.email },
    polls: resp.included
  }))
  }

  // console.log(resp)





   // this.setState({
    //   user: {username: resp.username, email: resp.email },
    //   polls: resp.polls
    // })


  render(){

    return(<>
      {console.log('Profile this.state', this.state)}
      <h1> this is the Profile page</h1>
      <h2> { this.state.user.username} </h2>
      <ul>
        { this.state.polls.map(poll => {
          return <PollCard pollData={poll} />
        }) }
      </ul>

      <button> Create new Poll</button>



      </>
      )
  }

}

export default Profile