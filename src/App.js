import React from 'react'
import { Provider, Route } from '@triframe/designer'
import { Vote} from './views/Vote'
import { Voter} from './views/Voter'
import "./App.css"
import {DumLogin} from "./views/DumLogin"
import {DumWelcome} from "./views/DumWelcome"


export default () => (
    <Provider url={process.env.REACT_APP_BACKEND_URL}>
        <Route exact path="/vote" component={Vote} />
        <Route exact path="/voter" component={Voter} />
        <Route exact path="/" component={DumWelcome} />
    </Provider>
)