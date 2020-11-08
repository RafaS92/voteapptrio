import React from 'react'
import { tether, Container, Heading, Area ,Card, Avatar, Paragraph } from '@triframe/designer'

export const Vote = tether(function*(){


    const state = yield {
        voter: " ",
        candidate: " ",
        year: 0

    }


    return (
        <Container>
            <Heading>Vote</Heading>
            <Area alignX="left" alingY="center"  >
                <Card>
                    <Heading>Alliance</Heading>
                    <Avatar.Image  source="https://i.ytimg.com/vi/7_dwkjQHre0/maxresdefault.jpg" /> 
                    <Paragraph>
                    "It met all my criteria I wanted in an acceptance speech. The base is going to feel really good about it - to go vote and to take five people to the polls with them. It did what it was supposed to do. [in terms of swaying voters] It's up to the individual. Everybody has to do their own research."
                    </Paragraph>

                </Card>
            
            </Area>

            <Area alignX="right" alingY="center" >
            
            <Card>
                    <Heading>Separatist</Heading>
                    <Avatar.Image  source="https://www.fanthatracks.com/wp-content/uploads/2018/08/amidala_template_5.jpg" /> 
                    <Paragraph>
                    "It met all my criteria I wanted in an acceptance speech. The base is going to feel really good about it - to go vote and to take five people to the polls with them. It did what it was supposed to do. [in terms of swaying voters] It's up to the individual. Everybody has to do their own research."
                    </Paragraph>



                </Card>
            
            </Area>

        </Container>
    )
})