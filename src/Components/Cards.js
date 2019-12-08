import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const Cards = (props) => {
  return (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={props.submitter_avatar}
        />
        <Card.Header>{props.submitter_name}</Card.Header>
        <Card.Meta>{props.time}</Card.Meta>
        <Card.Description>
          {props.comment_data}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='red' onClick={props.onToxicClick.bind(null, props.reddit_identifier, props.comment_url)}>
            Toxic
          </Button>
          <Button basic color='green' onClick={props.onNonToxicClick.bind(null, props.reddit_identifier)}>
            Non Toxic
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default Cards