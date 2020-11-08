import { Resource } from '@triframe/core'
import { include, Model, string , integer } from '@triframe/scribe'

export class Vote extends Resource {
    @include(Model)

    @string voter = ""

    @string candidate = ""

    @integer year = 0

}