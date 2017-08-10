/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableHighlight,
  } from 'react-native'
import { Icon } from 'native-base'
import CalendarPicker from 'react-native-calendar-picker'

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#dce2ed',
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
    height: 300,
    marginTop: 10,
  },
})

type Props = {
  modalVisible: boolean,
  title: string,
  allowRangeSelection: boolean,
  setEndDate: ?Function,
  setStartDate: Function,
  toggleCalendarModal: Function,
}

export default class CalendarModal extends Component {
  props: Props // eslint-disable-line react/sort-comp

  onDateChange(date: Date, type: string) {
    if (type === 'END_DATE' && this.props.setEndDate) {
      this.props.setEndDate(date)
    } else {
      this.props.setStartDate(date)
    }
  }

  closeModal() {
    this.props.toggleCalendarModal()
  }

  render() {
    const minDate = new Date(2017, 1, 1)
    const maxDate = new Date()

    return (
      <Modal
        animationType={'fade'}
        transparent
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
            <CalendarPicker
              startFromMonday
              allowRangeSelection={this.props.allowRangeSelection}
              minDate={minDate}
              maxDate={maxDate}
              todayBackgroundColor="#f2e6ff"
              selectedDayColor="#7300e6"
              selectedDayTextColor="#FFFFFF"
              onDateChange={(date, type) => this.onDateChange(date, type)}
            />
            <View />
          </View>
        </View>
      </Modal>
    )
  }
  }
