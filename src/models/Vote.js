import { Resource } from '@triframe/core'
import { belongsTo, include, Model, string , integer, session} from '@triframe/scribe'
import {Voter} from './Voter'

export class Vote extends Resource {
    @include(Model)

    @string 
    candidate = ""

    @belongsTo
    voter = null

    @integer 
    year = 0

    @session
    static async createVote(session, candidateName, year){
        await Voter.create({voterId: session.loggedInUserId, candidate: candidateName, year: 2020})
        return null
    }

    @session
    static async findVote(session){
        let foundVote = await Vote.where({voterId: session.loggedInUserId})
        if(foundVote[0] == null){
            console.log("I am returning false")
            return false
        }
        else{
            console.log("I am returning true")
            return true
        }
    }

}



