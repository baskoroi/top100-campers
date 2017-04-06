import React, { Component } from 'react'

class Row extends Component {
    render() {
        const { id, name, lastMonthPoints, allTimePoints } = this.props
        return (
            <tr>
                <td>{ id }</td>
                <td>{ name }</td>
                <td>{ lastMonthPoints }</td>
                <td>{ allTimePoints }</td>
            </tr>
        )
    }
}

export default Row
