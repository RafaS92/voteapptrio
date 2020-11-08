import React from 'react'
import { tether, Container, Heading, Button, Area } from '@triframe/designer'

export const Voter = tether(function*({redirect}){
    return (
        <Container>
           
        <Heading>Voter</Heading>
        <Area inline  alignX="left">
            <Button icon="plus" color="blue"  onPress={() => redirect('/vote')} >
                Vote here
            </ Button >
        </Area>
    </Container>
    )
})