import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import EnhancedComponent from './HigherOrderComponent'
import { Button } from 'react-native-paper';


class UsingHoc extends Component {
  render() {
    return (
      <View>
        <Text style={{fontWeight:'bold',fontSize:25,color:'black'}}>{this.props.addValue}</Text>
        <Text style={{fontWeight:'bold',fontSize:25,color:'black'}}>{this.props.subValue}</Text>
        <Text style={{fontWeight:'bold',fontSize:25,color:'black'}}>{this.props.mulValue}</Text>
        <Button mode="contained" onPress={() => this.props.addMethod()}>
                        Add
                    </Button>
                    <Button mode="contained" onPress={() => this.props.subMethod()}>
                        Sub
                    </Button>
                    <Button mode="contained" onPress={() => this.props.mulMethod()}>
                        Mul
                    </Button>

      </View>
    )
  }
}

export default EnhancedComponent(UsingHoc);

const styles = StyleSheet.create({})