import React, { Component } from 'react'
import axios from 'axios'

export default class AxiosTest extends Component {
    state = {
        error: '',
        playerList: [],
    }

    componentDidMount() {
        console.log("Hit Component")
        this.fetchArtists()

    }

    fetchArtists = async () => {
        try {
            console.log("Hit try")
            const res = await axios.get('/api/v1/player');
            this.setState({playerList: res.data});
        }
        catch (err) {
            console.log(err)
            this.setState({error: err.message})
        }
    }

    render() {
        if (this.state.error){
            return <div>{this.state.error}</div>
        }
        return (
            <div>
                <h1>All Players</h1>
                {this.state.playerList.map(player => (
                    <div key={player.id}>
                        <p>{player.name}</p>
                    </div>
                ))}
            </div>
        )
    }
}
