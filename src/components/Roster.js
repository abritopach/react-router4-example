import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import FullRoster from './FullRoster';
import Player from './Player';

class Roster extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/roster' component={FullRoster}/>
                <Route path='/roster/:number' component={Player}/>
            </Switch>
        );
    }
}

export default Roster;