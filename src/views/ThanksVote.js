import React from 'react'
import { tether, Container, Heading, Button, Area, Text } from '@triframe/designer'

export const ThanksVote = tether(function*({redirect}){
    return (
        

        
        <div className="message-wrap">

        
        <Container>
           
        <Heading>Thank you for vote!</Heading>
        <Text>Your vote have been registered.</Text>
        <Area inline  alignX="left">
            <Button icon="logout" color="red"  onPress={() => redirect('/')} >
                Logout
            </ Button >
        </Area>
        </Container>
        </div>

        
    )
})