import React from 'react';
import PollCard from '../components/PollCard';
import { withRouter, Link } from 'react-router-dom';
import { config } from '../Constants'

class Profile extends React.Component{

  state = {
    user: {},
    polls: []
  }

  componentDidMount(){
    const url = config.url.API_URL

    if (localStorage.userId){

      fetch(`${url}users/${localStorage.userId}`, {
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(res => res.json())
      .then(resp => {
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

    return(<div>
      <div className='profilecenter'>
      <p className='apptitle'>{ this.state.user.username }</p>
      <h2 >{ this.state.user.email }</h2>
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