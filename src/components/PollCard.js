import React from 'react';
import { Button, Card, Image, Icon } from 'semantic-ui-react'

const PollCard = (props) => {
  console.log(props)

  return(<>

    <Card>
      <Card.Content>
        <Card.Header>{ props.pollData.attributes.poll_name }</Card.Header>
      </Card.Content>
      <Card.Content extra>
        {/* <div className='ui two buttons'> */}
          { props.pollData.attributes.vote_options.map( option => {
            return <Card.Content extra>
              <div className='ui two buttons'>

            <Button primary key={option.key}> {option.option_name} </Button>
            </div>
            </Card.Content>
          })}
        {/* </div> */}
        <a>
          <Icon name='checkmark' />
          # Votes
        </a>
        
        <a>
          <Icon name='checkmark' />
          # Votes
        </a>
      </Card.Content>
    </Card>
  </>)

}
export default PollCard


{/* <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content> */}