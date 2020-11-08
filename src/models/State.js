import {Resource} from '@triframe/core'
import {hasMany, include, Model, string } from '@triframe/scribe'


export class State extends Resource{
    @include(Model)

    @string
    name = ""

    @hasMany
    candidates = []


}

