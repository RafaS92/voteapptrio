import React from 'react'
import {tether, Container, Heading, Card, Checkbox, Subheading, Section, Icon} from '@triframe/designer'
import {when, otherwise } from '@triframe/confectioner'



export const CandidateList = tether(function*({Api, redirect}){

    const {Candidate, Voter, Vote} = Api
    

    let candidates = yield Candidate.list()

    let currentUser = yield Voter.current()

    function voteForCandidate(e, candidate){
        e.preventDefault();
        console.log("I am voting for this person: " + candidate.name)
        console.log(currentUser.yell)
    }


 
    return(
        <Container>
            <Heading>Please select a candidate to vote for:</Heading>
                {candidates.map( candidate => 
                (<Section>
                    <Card onClick={ (e) => voteForCandidate(e, candidate)} >
                        <Card.Content>
                            <Heading>{candidate.name}</Heading>
                            {when(candidate.party == "Democrat", ()=> (
                                <Icon name="donkey" />
                                ), otherwise(()=>(
                                    <Icon name = "elephant"/>
                                ))
                            )}
                        </Card.Content>
                    </Card>
                </Section>))
                }
        </Container>
    )
})