import React from 'react'
import { connect } from 'react-redux';
import { getUserPolls } from '../actions/PollActions'

class Profile extends React.Component{

  state = {
    user: {},
    polls: []
  }

  componentDidMount() {
    const userpolls = getUserPolls(this.props.user.id)
  
  }


  render(){

    return(<>
      {console.log('Profile this.props.user', this.props.user)}
      <h1> this is the Profile page</h1>
      <h2> {this.props.user.username}</h2>

      {/* <ul>
        { this.props.polls.map(poll => {
          return <li>{poll.poll_name}</li>
        }) }
      </ul> */}



      </>
      )
  }

}

const mapStateToProps = state => {
  console.log('mapStateToProps', state)


  return({
    user: state.auth.currentUser
  })
}

export default connect(mapStateToProps, { getUserPolls })(Profile);