import React, { Component } from 'react'
import '../scss/UserName.scss'
import Synth from './Synth.js'

export default class UserName extends Component {
    state = {
        userName: '',
        userNameSelected: false
    }

    onUserNameChange = e => {
        let userName = e.target.value        
        this.setState({userName})
    }

    onUserNameSubmit = (e) => {
        e.preventDefault()
        console.log(`${this.state.userName} has joined the jam!`)
        this.setState({userNameSelected: true})
    }

    render() {
        return (
            <div>
                {this.state.userNameSelected ? 
                    <Synth userName = {this.state.userName}/>
                : 
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
                }
            </div>
        )
    }
}
