import React from 'react'
import {tether, Container, Heading, Card, Checkbox, Subheading, Section, Icon, MN} from '@triframe/designer'
import {when, otherwise } from '@triframe/confectioner'



export const CandidateList = tether(function*({Api, redirect}){

    const {Candidate, Voter, Vote} = Api
    

    let candidates = yield Candidate.list()

    let currentUser = yield Voter.current()

    function voteForCandidate(e, candidate){
        e.preventDefault();
        if(window.confirm("Do you want to vote for: " + candidate.name) == true){
            console.log("Nice")
            Vote.createVote(candidate.name, 2020)
            redirect('/thankyou')
        } else {
            console.log(currentUser.id)
            console.log("Please select another candidate")
        }

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