import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput, Button,HelperText } from 'react-native-paper';

const EnhancedComponent = (OriginalComponent) => {

   class NewComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            add: 0,
            mul: 1,
            sub: 0
        }
    }

    addOperation = () => {
        this.setState({add:this.state.add + 1})
    }

    subOperation = () => {
        this.setState({sub: this.state.sub - 1})
    }

    mulOperation = () => {
        this.setState({mul: this.state.mul * 5})
    }

    render(){
        return <OriginalComponent
               addValue = {this.state.add}
               subValue = {this.state.sub}
               mulValue = {this.state.mul}
               addMethod = {this.addOperation}
               subMethod = {this.subOperation}
               mulMethod = {this.mulOperation}
               />
    }

    }

return NewComponent;

}

export default EnhancedComponent;