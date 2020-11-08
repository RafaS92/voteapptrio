import React from 'react'
import { tether, Container, Heading, Area ,Card, Avatar, Paragraph,Button } from '@triframe/designer'

export const Vote = tether(function*(){


  


    return (
        <div className="wrapper">
            <img className="vote-image" src="https://www.ksat.com/resizer/4iS2CR0V4uPQT1Op9VlQNQnNj7E=/1280x720/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/arc-anglerfish-arc2-prod-gmg.s3.amazonaws.com/public/MF6NTT4NW5E7ZICB2DK5KHIK6M.jpg" />

        
            <Container >
                <h1 className="vote-title">Select your candidate:</h1>
                <div className="vote-container">
                


                    <div className="card">
                    <div className="card-image"></div>
                        <div className="card-text">
                            <h2>Republicans</h2>
                            <h3>Donald Trump</h3>
                            <p>The Republican Party is fighting for a freer and stronger America where everyone has the opportunity to achieve the American Dream.</p>
                        </div>
                    <div className="card-button">
                        <div className="stat">
                        
                            <button color="white" className="button" >Vote</button>
                        
                        </div>
                        
                        
                    </div>
                </div>

                    <div className="card">
                    <div className="card-image2"></div>
                        <div className="card-text">
                            <h2>Democrats</h2>
                            <h3>Joe Biden</h3>
                            <p>We are fighting for a better, fairer, and brighter future for every American: rolling up our sleeves, empowering grassroots voters, and organizing everywhere to take our country back.</p>
                        </div>
                    <div className="card-button2">
                        <div className="stat">
                        
                            <button color="white" className="button" >Vote</button>
                        
                        </div>
                        
                        
                    </div>
                    </div>
                
                </div>
            </Container>

        </div>
    )
})