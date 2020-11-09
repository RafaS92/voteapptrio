import React from 'react'
import {tether, Container, Heading, Button, TextInput, redirect, Subheading, Icon, Card} from '@triframe/designer'
import {when, otherwise } from '@triframe/confectioner'



export const ThankYou = tether(function*({Api, redirect}){


  const {Candidate, Voter, Vote} = Api

  let votes = yield Vote.list()
  
  let currentUser = yield Voter.current()


  return(
      <Container>
          <Heading>Thank you for visiting, have a nice day</Heading>
          {/* <Subheading>You have voted for: </Subheading>
          {votes.map (vote => {when(vote.voterId == currentUser.id, ()=> (
                                <Card><Card.Content><Heading>{vote.candidate}</Heading></Card.Content></Card>
                                ))})} */}
      </Container>
  )  
})