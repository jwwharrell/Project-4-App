import React, { Component } from 'react'
import * as Tone from 'tone'
import socketIOClient from "socket.io-client"
import KeyBed from "./KeyBed"
import "../scss/Synth.scss"

export default class Synth extends Component {
    state = {
        synth: '',
        socket: null,
        octave: "0",
        currentUsers: []        
    }

    componentDidMount() {
        Tone.start()
        // const fft = new Tone.FFT()
        
        //SYNTH
        //-------POLY-------\\
        const pingPong = new Tone.PingPongDelay("8t", "0.8").toMaster();
        const verb = new Tone.JCReverb("0.9").connect(pingPong)
        const synth = new Tone.PolySynth(6, Tone.Synth, {
            oscillator: {
                type: "sine"
            }
        }).connect(verb)
        synth.set({
            "detune": -1200,
            "volume": -35,
        });
        this.setState({ synth })
        //-------POLY-------\\

        //Socket Client
        // const socket = socketIOClient('https://guarded-falls-21789.herokuapp.com/');
        const socket = socketIOClient('localhost:4001');
        
        socket.emit('newUser', this.props.userName)
        socket.on('newUser', updatedUsers => {
            const previousState = { ...this.state }
            previousState.currentUsers = updatedUsers
            console.log(updatedUsers)
            this.setState(previousState)
        })
        socket.on('note', (data, updatedUsers) => {
            this.state.synth.triggerAttackRelease(data.note, data.duration)
            const previousState = { ...this.state }
            previousState.currentUsers = updatedUsers
            this.setState(previousState)
        })
        ///

        this.setState({ socket })
    }

    onKeyPress = (e) => {
        let newNote
        let hash
        if (this.state.octave === "-1") {
            hash = {
                "C4": 65,
                "D4": 83,
                "E4": 68,
                "F4": 70,
                "G4": 71,
                "A4": 72,
                "B4": 74,
                "C5": 75,
            }
        }
        if (this.state.octave === "0") {
            hash = {
                "C5": 65,
                "D5": 83,
                "E5": 68,
                "F5": 70,
                "G5": 71,
                "A5": 72,
                "B5": 74,
                "C6": 75,
            }
        }
        if (this.state.octave === "1") {
            hash = {
                "C6": 65,
                "D6": 83,
                "E6": 68,
                "F6": 70,
                "G6": 71,
                "A6": 72,
                "B6": 74,
                "C7": 75,
            }
        }
        const getNote = (object, value) => {
            newNote = Object.keys(object).find(key => object[key] === value)
        }
        getNote(hash, e.keyCode)

        if (newNote === null) {
            return
        }
        if (newNote === undefined) {
            return
        }

        this.state.synth.triggerAttackRelease([newNote], "4n");
        this.state.socket.emit('note', { note: [newNote], duration: '4n' })
        
    }

    onNewOctaveChange = (event) => {
        const newOctave = event.target.value
        const previousState = { ...this.state }
        previousState.octave = newOctave
        this.setState(previousState)
    }

    render() {
        return (
            <div className="App"
                onKeyDown={this.onKeyPress}>
                <h1>AmbientJam</h1>
                <br />
                <br />
                <h2>Octave Selector</h2>
                <div className="radioContainer">
                    <form className="radioToolbar">
                        <input
                            type="radio"
                            name="octaveSelector"
                            id="loOctave"
                            onChange={this.onNewOctaveChange}
                            value="-1"
                        /><label htmlFor="loOctave">-1</label>
                        <input
                            type="radio"
                            name="octaveSelector"
                            id="midOctave"
                            onChange={this.onNewOctaveChange}
                            value="0"
                        /><label htmlFor="midOctave">0</label>
                        <input
                            type="radio"
                            name="octaveSelector"
                            id="hiOctave"
                            onChange={this.onNewOctaveChange}
                            value="1"
                        /><label htmlFor="hiOctave">+1</label>
                    </form>
                </div>
                <br />
                <KeyBed
                    synth={this.state.synth}
                    octave={this.state.octave}
                    socket={this.state.socket} />
                {this.state.currentUsers.map(user => {
                    return (
                        <p key={user.userId}>{user.userName}</p>
                    )
                })}
            </div>
        )
    }
}
