import React, { Component } from 'react'
import SynthButton from './SynthButton'
import "../scss/KeyBed.scss"

export default class KeyBed extends Component {
    cNote = () => {
        console.log("Lo c")
    }
    dNote = () => {
        console.log("D")
    }
    render() {


        return (
            <div className="KeyBed">
                <SynthButton
                    synth={this.props.synth}
                    octave={this.props.octave}
                    socket={this.props.socket}
                    note='loC' />
                <SynthButton
                    synth={this.props.synth}
                    octave={this.props.octave}
                    socket={this.props.socket}
                    note='d' />
                <SynthButton
                    synth={this.props.synth}
                    octave={this.props.octave}
                    socket={this.props.socket}
                    note='e' />
                <SynthButton
                    synth={this.props.synth}
                    octave={this.props.octave}
                    socket={this.props.socket}
                    note='f' />
                    <SynthButton
                    synth={this.props.synth}
                    octave={this.props.octave}
                    socket={this.props.socket}
                    note='g' />
                <SynthButton
                    synth={this.props.synth}
                    octave={this.props.octave}
                    socket={this.props.socket}
                    note='a' />
                <SynthButton
                    synth={this.props.synth}
                    octave={this.props.octave}
                    socket={this.props.socket}
                    note='b' />
                <SynthButton
                    synth={this.props.synth}
                    octave={this.props.octave}
                    socket={this.props.socket}
                    note='hiC' />

            </div>
        )
    }
}
