import React, { Component } from 'react'
import User from './User';

const users = [
    { id: 1, fname: "Phirakon", lname: "Anachan" },
    { id: 1, fname: "123", lname: "456" }
]

export default class Users extends Component {
    render() {
        return (
            <div>
                {users.map((item)=>{
                    return (
                        <User fname={iten.fname} lname={item.lname} />
                    )
                })}
            </div>
        )
    }
}
