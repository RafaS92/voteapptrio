import React from 'react'
import { Provider, Route } from '@triframe/designer'
import { Vote} from './views/Vote'
import { Voter} from './views/Voter'
import "./App.css"
import {DumLogin} from "./views/DumLogin"
import {DumWelcome} from "./views/DumWelcome"
import { ThanksVote } from './views/ThanksVote';
import {NoVote} from './views/NoVote'
import { Login } from './views/Login';
import { Welcome } from './views/Welcome';

export default () => (
    <Provider url={process.env.REACT_APP_BACKEND_URL}>
        <Route exact path="/vote" component={Vote} />
        <Route exact path="/voter" component={Voter} />
        <Route exact path="/" component={DumLogin} />
        <Route exact path="/welcome" component={DumWelcome} />
        <Route exact path="/novote" component={NoVote} />
        <Route exact path="/thanksvote" component={ThanksVote} />

    </Provider>
)