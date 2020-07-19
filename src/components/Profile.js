import React, { Component } from 'react'

const data = [
    { id: 1, title: 'วองโกเล่', pic: './images/p1.jpg'},
    { id: 2, title: 'วองโกเล่ รุ่น1', pic: './images/p2.jpg'},
]

export default class Profile extends Component {
    render() {
        return (
            <div>
                <h1>ข้อลูมส่วนตัว</h1>
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src={item.pic} width="300" />
                            <h3>{item.title}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }
}
