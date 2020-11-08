import React from 'react';
import { tether, Heading, TextInput, Container, PasswordInput, Button } from '@triframe/designer';


export const Login = tether(function*(){

    const form = yield {
        firstname: '',
        lastname:  '',
        voterNumber: '',
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
                value={FormData.voterNumber}
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