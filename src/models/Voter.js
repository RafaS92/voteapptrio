import { Resource } from '@triframe/core'
import { compare } from 'bcrypt';
import { include, Model, string, integer, hasMany, session} from '@triframe/scribe'

export class Voter extends Resource {
    @include(Model)

    @string firstName = ""
    @string lastName = ""
    @integer votersNumber = 0
    @string passwordDigest= ""

    @session
    static async login( session, votersNumber, password) {
        let [ voter ] = await Voter.where({votersNumber: votersNumber});

        if (voter == undefined) {
            throw Error(`Could not find user with that voter's number`);
        }

        if (!await compare(password, voter.passwordDigest)) {
            throw Error(`Incorrect Password`);
        }
        session.loggedInUserId = voter.id 
        return true
    }

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