import React, { Component } from 'react'

import Row from './Row'

import './Table.scss'

class Table extends Component {
    render() {
        const rows = Array.from(Array(10).keys()).map((el, id) => {
            return (
                <Row 
                    id={id}
                    key={id}
                    img={'https://avatars.githubusercontent.com/u/9335367?v=3'}
                    name={'asdf'}
                    lastMonthPoints={123}
                    allTimePoints={1234} />
            )
        })

        console.log(rows)

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
