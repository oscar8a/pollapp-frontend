import React from 'react'
import PollCard from '../components/PollCard'

class Main extends React.Component{

  state = {
    allPolls: []
    // myPolls: []
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
      allPolls: data.data
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

  render(){
    return(<>
    <h1>...this is the Main page</h1>
    {/* <section>
      <h2> My Polls </h2>
      {console.log(this.props)}
      {console.log(this.state)}
      <ol>
        {this.state.myPolls.map(poll => <li key={poll.id}>{ poll.poll_name }</li>)}
      </ol>
    </section>  */}
    <section>
      <h2>... these are All Polls </h2>
      {console.log(this.state.allPolls)}
      <div className="flex-container">
        {this.state.allPolls.map(poll => {return<PollCard pollData={poll} key={poll.id}/>})} 
        
        {/* <a href=" " key={poll.id}>{ poll.attributes.poll_name }</a>)} */}
      </div>
    </section> 
    </>)
  }

}

export default Main;