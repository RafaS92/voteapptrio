import React from 'react'
import { tether, Container, Heading, Button, Area, Text } from '@triframe/designer'

export const NoVote = tether(function*({redirect}){
    return (


        <div className="message-wrap">
        <Container>
           
        <Heading>We sorry</Heading>
        <Text>You already vote for this election.</Text>
        <Area inline  alignX="left">
            <Button icon="logout" color="red"  onPress={() => redirect('/')} >
                Logout
            </ Button >
        </Area>
    </Container>


    </div>
    )
})