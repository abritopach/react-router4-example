import React, { Component } from 'react';
import PlayerAPI from '../services/PlayerAPI';

class Player extends Component {

    constructor(props) {
        super(props);
        const player = PlayerAPI.get(
            parseInt(props.match.params.number, 10)
        )
        this.state = {player: player};
    }

    render() {
        if (!this.state.player) {
            return <div>Sorry, but the player was not found</div>
        }
        else {
            return (
                <div>
                    <h1>{this.state.player.name} (#{this.state.player.number})</h1>
                    <h2>{this.state.player.position}</h2>
                </div>
            );
        }
    }
}

export default Player;