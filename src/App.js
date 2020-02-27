import React, { Component } from 'react'
import Synth from './components/Synth.js'
import UserName from './components/UserName.js'

export default class App extends Component {

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <UserName />
      </div>
    )
  }
}
