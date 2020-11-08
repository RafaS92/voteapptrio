import { Resource } from '@triframe/core'
import { compare, hash } from 'bcrypt';
import { include, Model, string, integer, hasMany, session, stream } from '@triframe/scribe'

export class Voter extends Resource {
    @include(Model)

    @hasMany
    votes = []

    @string
    firstname = ""

    @string
    lastname = ""

    @integer
    votersNumber = 0

    @string
    passwordDigest = ""

    @string
    username = ""


    static async register(firstname, lastname, votersNumber){
        let passwordDigest = await hash('123', 10)
        return Voter.create({ firstname: firstname, passwordDigest: passwordDigest, lastname: lastname, votersNumber:votersNumber })
    }
    
    @session
    static async login( session, firstname, password) {
        let [ voter ] = await Voter.where({firstname: firstname});

        if (voter == undefined) {
            throw Error(`Could not find user with that name`);
        }

        if (!await compare(password, voter.passwordDigest)) {
            throw Error(`Incorrect Password`);
        }
        session.loggedInUserId = voter.id 
        return true
    }

    @session
    @stream
    static *current(session){
        return (
            session.loggedInUserId !== null
                ? yield Voter.read(session.loggedInUserId)
                : null
        )
    }
}