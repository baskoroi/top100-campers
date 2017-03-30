import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return (
            <div>
                <h1>HELLO, WORLD!</h1>
                <p>This is Baskoro Indrayana!</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))