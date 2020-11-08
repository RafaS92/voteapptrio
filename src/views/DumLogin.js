import React from 'react'
import {tether, Container, Heading, Button, TextInput, Text} from '@triframe/designer'
import { Paragraph } from '@triframe/designer/dist/paper'



export const DumLogin= tether(function*({Api, redirect}){

    const {Voter} = Api

    const form = yield {
        username: ''
    }

  return(

    <div className="login-wrapper ">

        <div >
       
          <div className="form-container">
          <h2 className="login-form-head">Login</h2>

          <TextInput
                label="Username"
                value={form.username}
                onChange={value => form.username = value}
          />
          <TextInput // add this dont know if we have to Rafa
                label="Password"
                value={form.password} 
                onChange={value => form.username = value}
                
          />
          <Button onPress={async () => {
              await Voter.login(form.username)
              redirect('/welcome')
              }}> 
            Login
          </Button>

          </div>
          </div>
      
    </div>
  )  
})

    