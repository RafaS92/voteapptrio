import React from 'react'
import {tether, Container, Heading, Button, TextInput} from '@triframe/designer'



export const Login= tether(function*({Api, redirect}){

    const {Voter} = Api

    const form = yield {
        username: ''
    }

  return(
      <Container>
          <Heading>Login</Heading>
          <TextInput
                label="Username"
                value={form.username}
                onChange={value => form.username = value}
          />
          <Button onPress={async () => {
              await Voter.login(form.username)
              redirect('/welcome')
              }}> 
            Login
          </Button>
      </Container>
  )  
})

    