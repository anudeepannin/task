import React, { Component } from 'react'

export default class class1 extends Component {
    state={
 name:"React compent"
    }
    render() {
        return (
            <div>
                <h4>hello{this.state.name} </h4>
            </div>
        )
    }
}
