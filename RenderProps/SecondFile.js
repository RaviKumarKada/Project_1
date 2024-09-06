import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import ThirdFile from './ThirdFile'
import { TextInput, Button,HelperText } from 'react-native-paper';


export default class SecondFile extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: "Kada"
        }
    }

    textChangingPassword = (text) => {
        this.setState({name:text})
    }

  render() {
    return (
    <ThirdFile
        renderDemo = {() => {
            return (
                <View>
                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25,color:'black'}}>{this.state.name}</Text>
                <TextInput
                                onChangeText={this.textChangingPassword}
                                mode="outlined"
                                label="Enter User"
                                placeholder='Enter User'  
                            />
              </View>
            )
        }}

    />
    
    )
  }
}

const styles = StyleSheet.create({})