import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import SecondFile from './SecondFile'

export default class FirstFile extends Component {
  render() {
    return (
      <View>
        <Text>FirstFile</Text>
        <SecondFile/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})