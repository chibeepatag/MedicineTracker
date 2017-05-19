// @flow
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableHighlight,
  TextInput,
  } from 'react-native'
import { Button, Icon, Toast } from 'native-base'

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 15,
    width: 375,
    height: 400,
  },
  title: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  content: {
    width: 375,
    height: 200,
    paddingRight: 30,
    marginTop: 10,
  },
  emailInput: {
    height: 30,
    width: 300,
    borderBottomWidth: 1,
    marginBottom: 30,
  },
})

type Props = {
  modalVisible: boolean,
  title: string,
  toggleEmailModal: Function,
}

export default class EmailModal extends Component {
  props: Props // eslint-disable-line react/sort-comp

  closeModal() {
    this.props.toggleEmailModal()
  }

  send() {
    console.log('send')
    this.props.toggleEmailModal()
    Toast.show({
      text: 'Report sent!',
      position: 'bottom',
      duration: 1500,
    })
  }

  render() {
    return (
      <Modal
        animationType={'fade'}
        visible={this.props.modalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.title}>
            <Text>{this.props.title}</Text>
            <TouchableHighlight onPress={() => this.closeModal()}>
              <View><Icon name="close" /></View>
            </TouchableHighlight>
          </View>
          <View style={styles.content}>
            <TextInput style={styles.emailInput} autoCapitalize="none" autoFocus autoCorrect={false} />
            <Button light block onPress={() => this.send()}>
              <Text>Send</Text>
            </Button>
          </View>
        </View>
      </Modal>
    )
  }
}
