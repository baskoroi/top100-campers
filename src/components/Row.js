import React, { Component } from 'react'

import './Row.scss'

class Row extends Component {
    render() {
        const { id, img, name, lastMonthPoints, allTimePoints } = this.props
        return (
            <tr className="camper">
                <td>{id}</td>
                <td>
                    <img className="camper-pic" src={img} alt="" />
                    <a href={'https://freecodecamp.com/' + name}>{name}</a>
                </td>
                <td>{lastMonthPoints}</td>
                <td>{allTimePoints}</td>
            </tr>
        )
    }
}

export default Row
