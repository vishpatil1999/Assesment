import React, { Component } from 'react'
interface ClassProps {
    firstName?: string; // using interface
    lastName?: string;
    message?:string
}
export default class ClassComponent extends Component<ClassProps>{
    state: ClassProps = {
        // second annotation for better type inference
        firstName:'Pranjal' // assining value is state
    };
    render() {
        return (
            <div>{this.props.message} {this.state.firstName}</div>
        )
    }
}
