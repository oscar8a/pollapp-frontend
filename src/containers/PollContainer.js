import React from 'react'

class PollContainer extends React.Component{

  render(){

    return(<h1> POll COntainer</h1>)
  }
}
export default PollContainer


// {
//   props.pollData.attributes.vote_options.map( option => {
//     return <div key={option.key}>
//       <div className='ui two buttons'>
//       <Button primary key={option.key}> {option.option_name} </Button>
//       </div>
//       <div>
//   <Icon name='checkmark' />
//   # Votes
// </div>
//       </div>
//   })
// }