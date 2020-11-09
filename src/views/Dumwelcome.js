import React from 'react'
import {tether, Container, Heading, Button, TextInput, redirect} from '@triframe/designer'



export const DumWelcome = tether(function*({Api, redirect}){

    const {Voter} = Api

    const form = yield {
        username: ''
    }

  return(

    <div className="wrapper">
      
      
      <Container>
          
          <div className="welcome-container">
                 <div className="intro-container">
                     <h1> Welcome! to Voteapp </h1>
                     <img src="https://portswigger.net/cms/images/2e/80/227d9e5335db-twittercard-180816-smartphone-voting-body.jpg" className="image-top" />
                   <p className="welcome-text">Aren't you tired of waiting in line to vote? No more! Voteapp helps you to vote. 

                    </p>
                   <p className="welcome-text">

                   We believe that higher participation leads to a stronger democracy.
                    </p>

                   <div className="result-container">
                        <h3>Results so far: </h3>

                        <strong> Trump: trump-votes</strong>

                        <strong> Biden: Biden-votes</strong>
                        
                   
                    </div>

                </div>
            
            <div className="welcome-image-container">
                <img className="welcome-image" src="https://image.freepik.com/free-vector/online-vote-concept-flat-design-vector-illustration_16734-287.jpg" />

            </div>
                 <div className="question-container">
                 <Heading>Hello! Would you like to vote now?</Heading>
                    <Button color="blue" onPress={async () => {
                        redirect('/vote')
                    }}
                    >Yes</Button>
                    

                </div>
            </div>
      </Container>

      </div>

  )  
})
