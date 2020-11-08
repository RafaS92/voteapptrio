import React from 'react'
import {tether, Container, Heading, Button, TextInput, redirect} from '@triframe/designer'



export const Welcome = tether(function*({Api, redirect}){

    const {Voter} = Api

    const form = yield {
        username: ''
    }

  return(
      <Container>
          <Heading>Hello! Would you like to vote in this current election?</Heading>
          <Button onPress={async () => {
              redirect('/candidates')
          }}
          >Yes</Button>
          <Button>No</Button>
      </Container>
  )  
})
