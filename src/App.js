import React, { Component } from 'react'

import Navbar from './components/Navbar'
import Table from './components/Table'
import Footer from './components/Footer'

import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Table />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
