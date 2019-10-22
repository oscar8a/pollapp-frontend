import React from 'react';
import PollCard from '../components/PollCard';
import { withRouter } from 'react-router-dom';

class AllPolls extends React.Component{

  state = {
    allPolls: [],
    filteredPolls: []
  }

  componentDidMount(){
    //Doesn't need token for now...
    const token  = localStorage.token

    if (localStorage.token){

    fetch("http://localhost:3000/polls", {
      headers: {
        "Authorization": token
      }
    }).then(res => res.json())
    .then(data => this.setState({
      allPolls: data.data,
      filteredPolls: data.data
    })
    )
  }
    // const loggedInUserId = localStorage.userId

    // if (loggedInUserId){
    //   fetch(`http://localhost:3000/users/${loggedInUserId}`, {
    //     headers: {
    //       "Authorization": token
    //     }
    //   })
    //   .then(res => res.json())
    //   .then(user => this.setState({
    //     myPolls: user.polls
    //   }))
    // }
  }

  handleChange = (selectedOption) => {

    let pollArray = []

    const allPollsArray = this.state.allPolls

    switch(selectedOption.target.value){
      case 'all':
        this.setState({filteredPolls: allPollsArray});
        break;
      case 'true':
        pollArray = allPollsArray.filter(poll => poll.attributes.is_active);
        this.setState({filteredPolls: pollArray});
        break;
      case 'false':
        pollArray = allPollsArray.filter(poll => poll.attributes.is_active === false);
        this.setState({filteredPolls: pollArray})
    }
  }

  render(){

    return(<>
    <section className='profilecenter'>
      <h1 >All Polls</h1>
      <select placeholder={'Select Filter Option'} onChange={this.handleChange}>
        <option value="all">All</option>
        <option value="true">Active Polls</option>
        <option value="false">Closed Polls</option>
      </select>
    </section>
    <section>
      <div className="flex-container">
        {this.state.filteredPolls.map(poll => {return<PollCard pollData={poll} key={poll.id}/>})}
      </div>
    </section> 
    </>)
  }

}

export default withRouter(AllPolls)