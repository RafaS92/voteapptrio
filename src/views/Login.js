import React from 'react';
import { tether, Heading, TextInput, Container, PasswordInput, Button, HelperText } from '@triframe/designer';

export const Login = tether(function*({ Api, redirect }){

    const { Voter } = Api;

    const form = yield {
        firstname: '',
        lastname:  '',
        votersNumber: '',
        password: '',
        errorMessage: null,
        username: ''
    }
    return (
        <Container>
            <Heading>Login To Vote</Heading>
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

            <Button onPress={async () => {
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
        </Container>
    )
})