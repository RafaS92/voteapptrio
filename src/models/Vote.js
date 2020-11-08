
import { Resource } from '@triframe/core'
import { belongsTo, include, Model, string , integer, } from '@triframe/scribe'

export class Vote extends Resource {
    @include(Model)

    @string 
    candidate = ""

    @belongsTo
    voter = null

    @integer 
    year = 0

}