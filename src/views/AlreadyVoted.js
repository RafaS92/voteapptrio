import React from 'react'
import {tether, Container, Heading, Button, TextInput, redirect, session} from '@triframe/designer'




export const AlreadyVoted= tether(function*({Api, redirect}){



  return(
      <Container>

          <Heading>Appears that you have already voted! Thank you, 
              and be sure to attend the next election!</Heading>
            
      </Container>
  )  
})
