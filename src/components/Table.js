import React, { Component } from 'react'
import axios from 'axios'

import Row from './Row'

import './Table.scss'

class Table extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            board: []
        }
        this.allTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'
        this.recentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
        this.isRecent = true
    }

    componentWillMount() {
        this.getTopCampers(this.recentUrl)
    }

    getTopCampers(url) {
        axios.get(url).
            then((response) => {
                this.setState({ board: response.data })
            })
    }

    showCampers(isRecent) {
        this.getTopCampers(isRecent ? 
            this.recentUrl : this.allTimeUrl)
        this.isRecent = isRecent
    }

    render() {
        const rows = this.state.board.map((camper, id) => {
            let { username, img, alltime, recent } = camper
            return (
                <Row 
                    id={id+1}
                    key={username}
                    img={img}
                    name={username}
                    recentPoints={recent}
                    allTimePoints={alltime} />
            )
        })

        return (
            <table className="table camper-table">
                <thead>
                    <tr>
                        <td></td>
                        <th className="cell-showing" colSpan="3">Showing: {this.isRecent ? 
                            'Recent top 100 campers (past 30 days)' :
                            'All time 100 campers'}</th>
                    </tr>
                    <tr>
                        <th>#</th>
                        <th>Camper Name</th>
                        <th>
                            <a href="#" 
                                onClick={this.showCampers.bind(this, true)}>
                                Points in past 30 days
                            </a>
                        </th>
                        <th>
                            <a href="#" 
                                onClick={this.showCampers.bind(this, false)}>
                                All time points
                            </a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default Table
