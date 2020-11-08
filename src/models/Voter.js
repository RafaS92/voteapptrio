import { Resource } from '@triframe/core'
import { include, Model, string, integer, session} from '@triframe/scribe'
import { compare } from 'bcrypt';

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

}


