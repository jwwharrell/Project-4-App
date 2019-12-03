import React, { Component } from 'react'
import axios from 'axios'
import '../scss/GuestBook.scss'

export default class GuestBook extends Component {
    state = {
        error: '',
        guestList: [],
        currentGuest: ''
    }

    componentDidMount() {
        this.fetchGuests()
    }

    fetchGuests = async () => {
        try {
            const res = await axios.get('/api/v1/guest_book');
            this.setState({ guestList: res.data });
        }
        catch (err) {
            this.setState({ error: err.message })
        }
    }

    onGuestBoookSigning = (e) => {
        e.preventDefault()
        const guestName = this.state.currentGuest
        axios.post('/api/v1/guest_book/', {name: guestName})
        this.fetchGuests()
    }

    onNewGuestChange = (e) => {
        const newGuest = e.target.value
        const previousState = { ...this.state }
        previousState.currentGuest = newGuest
        this.setState(previousState)
    }

    render() {
        if (this.state.error) {
            return <div>{this.state.error}</div>
        }
        return (
            <div>
                <h2>Sign Guest Book</h2>
                <form
                    onSubmit={this.onGuestBoookSigning}>
                    <input
                        type='text'
                        name="name"
                        onChange={this.onNewGuestChange}
                        value={this.state.currentGuest}
                    />
                    <br />
                    <br />
                    <input
                        type='submit'
                        value="Add To Guest Book"
                    />
                </form>
                <h2>Guests</h2>
                {this.state.guestList.map(guest => (
                    <div key={guest.id}>
                        <p>{guest.name}</p>
                    </div>
                ))}
            </div>
        )
    }
}
