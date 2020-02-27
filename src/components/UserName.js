import React, { Component } from 'react'
import '../scss/UserName.scss'

export default class UserName extends Component {
    state = {
        userName: ''
    }

    onUserNameChange = e => {
        let userName = e.target.value        
        this.setState({userName})
    }

    onUserNameSubmit = (e) => {
        e.preventDefault()
        console.log(`${this.state.userName} has joined the jam!`)
    }

    render() {
        return (
            <div className='userName'>
                <form onSubmit={this.onUserNameSubmit}>
                    <input
                        type='text'
                        placeholder='User Name'
                        onChange={this.onUserNameChange}
                        value={this.state.userName}
                    />
                    <input
                        type='submit'
                        value='Start Jamming!'
                    />
                </form>
            </div>
        )
    }
}
