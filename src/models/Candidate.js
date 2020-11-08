import {Resource} from '@triframe/core'
import {belongsTo, hasMany, include, Model, string } from '@triframe/scribe'


export class Candidate extends Resource{
    @include(Model)

    @string
    name = ""

    @string
    party = ""

    @hasMany
    votes = []

    @belongsTo
    state = null

    
}