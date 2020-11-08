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
                value={FormData.firstname}
            />

            <TextInput 
                label="Last Name"
                value={FormData.lastname}
            />

            <TextInput 
                label="Voter Number"
                value={FormData.votersNumber}
            />

            <PasswordInput 
                label="Password"
                value={FormData.password}
            />

            <Button>
                Login 
            </Button>
        </Container>
    )
})