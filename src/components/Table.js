import React, { Component } from 'react'

import './Table.scss'

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Camper Name</th>
                        <th>Points in past 30 days</th>
                        <th>All time points</th>
                    </tr>
                </thead>
            </table>
        )
    }
}

export default Table
