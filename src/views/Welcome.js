import React from 'react'
import {tether, Container, Heading, Button, TextInput, redirect, session} from '@triframe/designer'
import {when, otherwise } from '@triframe/confectioner'



export const Welcome = tether(function*({Api, redirect}){

    const {Vote} = Api

    const form = yield {
        username: ''
    }


    



  return(
      <Container>
          <Heading>Hello! Would you like to vote in this current election?</Heading>
          <Button onPress={async () => {
              {when(Vote.findVote == true, ()=> (
                redirect('/alreadyVoted')
                ), otherwise(()=>(
                    redirect('/candidates')
                ))
            )}
          }}
          >Yes</Button>
          <Button onPress={async () => {
              
            redirect('/thankyou')
          }}>No</Button>
      </Container>
  )  
})
