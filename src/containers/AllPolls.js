import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  console.log(state)
  // console.log(state.pokemon)
  return {
    polls: state.polls
  }
}

const fetchPolls = () => {
  console.log("fetch polls is about to return")
  return function(dispatch){
    console.log("about to fetch")

    fetch("http://localhost:3000/polls")
    .then(res => res.json())
    .then(pollData => dispatch({
        type: "FILL_POLLS",
        polls: pollData
      })
    )
  }
}

class AllPolls extends React.Component {

  componentDidMount(){
    // fetch("http://localhost:3000/polls")
    //   .then(resp => resp.json())
    //   .then(data => reducer.getAllPolls)

    this.props.fetchPolls()

  }

  render(){
    console.log(this.props.polls)
    return(<>
      <h1> All Polls </h1>
      <ul>
        { this.props.polls.map(poll => <li key={poll.id}> {poll.poll_name}</li>)}
      </ul>
    </>)
  }
}

const wrap = connect(mapStateToProps)

const ConnectedAllPolls = wrap(AllPolls)

export default ConnectedAllPolls

// connect(mapStateToProps, { fetchPolls: fetchPolls })(AllPolls)