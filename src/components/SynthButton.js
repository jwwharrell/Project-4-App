import React, { Component } from 'react'
import '../scss/SynthButton.scss'
export default class SynthButton extends Component {

    onButtonClick = () => {
        let clickedKey = this.props.note
        let newNote
        let hash
        if (this.props.octave === "-1") {
            hash = {
                "C4": "loC",
                "D4": "d",
                "E4": "e",
                "F4": "f",
                "G4": "g",
                "A4": "a",
                "B4": "b",
                "C5": "hiC",
            }
        }
        if (this.props.octave === "0") {
            hash = {
                "C5": "loC",
                "D5": "d",
                "E5": "e",
                "F5": "f",
                "G5": "g",
                "A5": "a",
                "B5": "b",
                "C6": "hiC",
            }
        }
        if (this.props.octave === "1") {
            hash = {
                "C6": "loC",
                "D6": "d",
                "E6": "e",
                "F6": "f",
                "G6": "g",
                "A6": "a",
                "B6": "b",
                "C7": "hiC",
            }
        }
        const getNote = (object, value) => {
            newNote = Object.keys(object).find(key => object[key] === value)
        }
        getNote(hash, clickedKey)

        if (newNote === null) {
            return
        }
        if (newNote === undefined) {
            return
        }


        this.props.synth.triggerAttackRelease([newNote], "4n");
        this.props.socket.emit('note', { note: [newNote], duration: '4n' })

    }
    render() {
        return (
            <div className="SynthButton">
                <button
                    onMouseOver={this.onButtonClick}>
                </button>
            </div>
        )
    }
}
