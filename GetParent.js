import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import GetChild from './GetChild'

export default class GetParent extends Component {
  render() {
    return (
      <View>
        <GetChild name = "Ravi Kada"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})