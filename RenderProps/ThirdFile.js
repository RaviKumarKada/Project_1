import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class ThirdFile extends Component {
  render() {
    return (
      <View>
        <Text>ThirdFile</Text>
        {this.props.renderDemo()}
      </View>
    )
  }
}

const styles = StyleSheet.create({})