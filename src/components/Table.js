import React, { Component } from 'react'

import Row from './Row'

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
                <tbody>
                    <Row 
                        id={1}
                        name={'asdf'}
                        lastMonthPoints={123}
                        allTimePoints={1234} />
                    <Row 
                        id={1}
                        name={'asdf'}
                        lastMonthPoints={123}
                        allTimePoints={1234} />
                    <Row 
                        id={1}
                        name={'asdf'}
                        lastMonthPoints={123}
                        allTimePoints={1234} />

                    <Row 
                        id={1}
                        name={'asdf'}
                        lastMonthPoints={123}
                        allTimePoints={1234} />
                    <Row 
                        id={1}
                        name={'asdf'}
                        lastMonthPoints={123}
                        allTimePoints={1234} />
                    <Row 
                        id={1}
                        name={'asdf'}
                        lastMonthPoints={123}
                        allTimePoints={1234} />
                </tbody>
            </table>
        )
    }
}

export default Table
