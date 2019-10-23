import React from 'react';
import PollCard from '../components/PollCard';
import { withRouter, Link } from 'react-router-dom';

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
      // fetch(`https://dis-or-dat-poll-app.herokuapp.com/users/${localStorage.userId}`, {
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
    }
  }

  render(){

    let buttonPoll = localStorage.userId ? 
    <Link to="/createpoll">
    <button className='ui olive button'> Create new Poll</button>
    </Link>
    :
    <button className="ui disabled button" disabled='true'>Disabled</button>

    //Work on something so profile doesn't show when not logged in
    return(<div>
      {console.log('Profile this.state', this.state)}
      <div className='profilecenter'>
      <h1>{ this.state.user.username }</h1>
      {buttonPoll}
      <h2> Your Polls: </h2>
      </div >
      <ul className="flex-container">
        { this.state.polls.map(poll => {
          return <PollCard key={poll.id} pollData={poll} />
        }) }
      </ul>
      </div>
      )
  }
  
}
export default withRouter(Profile)