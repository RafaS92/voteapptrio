import React from 'react';
import { tether, Heading, TextInput, Container, PasswordInput, Button } from '@triframe/designer';


export const Login = tether(function*(){

    const form = yield {
        firstName: '',
        lastName:  '',
        votersNumber: '',
        password: ''
    }
    return (
        <Container>
            <Heading>Login To Vote</Heading>
            <TextInput 
                label="First Name"
                value={FormData.firstName}
                onChange={value => form.firstName = value}
            />

            <TextInput 
                label="Last Name"
                value={FormData.lastName}
                onChange={value => form.lastName = value}
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
                
            }}>
                Login 
            </Button>
        </Container>
    )
})