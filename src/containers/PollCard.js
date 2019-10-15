import React from 'react';

const PollCard = (props) => {
  console.log(props)

  return(<>
    <div>
      <h2>Poll Card</h2>
      <h3>{ props.pollData.attributes.poll_name }</h3>
      <div>
        { props.pollData.attributes.vote_options.map( option => {
          return <div key={option.key}> {option.option_name} </div>
        })}
      </div>
      <div>

      </div>
      
    </div>
  </>)

}
export default PollCard