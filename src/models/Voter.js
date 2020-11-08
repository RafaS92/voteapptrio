import { Resource } from '@triframe/core'
import { include, Model, string, hasMany, session} from '@triframe/scribe'

export class Voter extends Resource {
    @include(Model)

    @hasMany
    votes = []

    @string
    firstname = ""

    @string
    lastname = ""

    

    @string
    password = ""

    @string
    username = ""

    @session
    static async login(session, inputUsername){
        let [voter] = await Voter.where({username: inputUsername})

        session.loggedInUserId = voter.id
        return null
    }

    @session
    static current(session){
        return Voter.read(session.loggedInUserId)
    }

    

}