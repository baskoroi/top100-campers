import React, { Component } from 'react'

import Row from './Row'

import './Table.scss'

class Table extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            board: []
        }
    }

    componentWillMount() {
        
    }

    render() {
        const rows = this.state.board.map((el, id) => {
            return (
                <Row 
                    id={id+1}
                    key={'asdf'}
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
