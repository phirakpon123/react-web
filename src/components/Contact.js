import React, { Component } from 'react';
import {Button,} from 'reactstrap';

export default class Contact extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            message: 'Unlike',
            type:''
        }
        this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage() {
        this.setState({ message: "Like"});
    }


    render() {
        return (
            <div>
                <h2>ติดต่อเรา</h2>
                <Button onClick={this.changeMessage}>{this.state.massage}</Button>
            </div>
        )
    }
}
