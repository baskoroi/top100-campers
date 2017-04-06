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
    }

    componentWillMount() {
        axios.get(this.allTimeUrl).
            then((response) => {
                this.setState({ board: response.data })
            })
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
                    lastMonthPoints={recent}
                    allTimePoints={alltime} />
            )
        })

        return (
            <table className="table camper-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Camper Name</th>
                        <th>Points in past 30 days</th>
                        <th>All time points</th>
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
