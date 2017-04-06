import React, { Component } from 'react'
import Navbar from './components/Navbar'
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
