import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.fname} {this.props.lname}</h1>
            </div>
        )
    }
}
