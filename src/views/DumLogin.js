import React from 'react'
import {tether, Container, Heading, Button, TextInput,PasswordInput, Text,HelperText} from '@triframe/designer'
import { Paragraph } from '@triframe/designer/dist/paper'



export const DumLogin= tether(function*({Api, redirect}){

    const { Voter } = Api;

    const form = yield {
        firstname: '',
        lastname:  '',
        votersNumber: '',
        password: '',
        errorMessage: null,
        username: ''
    }

  return(   

    

    <div className="login-wrapper">

       
       
          <div className="form-container">
          <h2 className="login-form-head">Login</h2>

          <TextInput 
                label="First Name"
                value={FormData.firstname}
                onChange={value => form.firstname = value}
            />

            <TextInput 
                label="Last Name"
                value={FormData.lastname}
                onChange={value => form.lastname = value}
            />

            <TextInput 
                label="Voter Number"
                value={FormData.votersNumber}
                onChange={value => form.votersNumber = value}
            />

            <PasswordInput 
                label="Password"
                value={FormData.password}
                onChange={value => form.password = value}
            />

            <Button color="blue" onPress={async () => {
                try{
                    await Voter.login(form.firstname, form.password)
                    redirect('/welcome')
                }catch(error){
                    form.errorMessage = error.message;
                }
            }}>
                Login 
            </Button>
            <HelperText type="error" visible={form.errorMessage !== null}>
                {form.errorMessage}
            </HelperText>

          </div>
          </div>
      
   
  )  
})

    