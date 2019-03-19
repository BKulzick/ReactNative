import React from 'react';
import {Button} from 'react-native';

export class Square extends React.Component {
    constructor() {
        super();
        this.state = {value: " "}
    }
    toggle = () => {
        this.setState({value: "x"})
    }

    render() {
        return (
            <Button title = {this.state.value} onPress ={this.toggle}>

            </Button>
        );
    }
}