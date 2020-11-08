import { Resource } from '@triframe/core'
import { include, Model, string, integer} from '@triframe/scribe'

export class Voter extends Resource {
    @include(Model)

    @string firstName = ""
    @string lastName = ""
    @integer votersNumber = 0
    @string password= ""

}


