import React, { Component } from 'react'

import './navbar.scss'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img
                            id="logo"
                            src="https://res.cloudinary.com/baskoroi/image/upload/v1491484361/top100-campers/free-code-camp.png"
                            alt="Free Code Camp Leaderboard" />
                        <h1 id="logo-name">leaderboard</h1>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
