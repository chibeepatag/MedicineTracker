/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import { Content, Form, Item, Label, Picker } from 'native-base'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import CalendarModal from './calendarModal'
import MEDICATIONS_LIST from './medications_list.json'
import DOSE from './dose.json'
import FREQUENCY from './frequency.json'
import ROUTE from './route.json'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

class MedicationScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      calendarModalVisible: false,
      antibiotics: MEDICATIONS_LIST.aminoglycosides.antibiotics
    }
  }

  onValueChangeClass(value) {
    const keys = Object.keys(MEDICATIONS_LIST)
    const key = keys.find(index => MEDICATIONS_LIST[index].name === value)
    this.setState({ antibiotics: MEDICATIONS_LIST[key].antibiotics })
    this.props.setMedicineClass(value)
  }

  onValueChangeAntibiotic(value) {
    this.props.setMedicineAntibiotic(value)
  }

  onValueChangeDose(value) {
    this.props.setMedicineDose(value)
  }

  onValueChangeFrequency(value) {
    this.props.setMedicineFrequency(value)
  }

  onValueChangeRoute(value) {
    this.props.setMedicineRoute(value)
  }

  setStartDate(date) {
    this.props.setMedicineStart(date)
  }

  setEndDate(date) {
    this.props.setMedicineEnd(date)
  }

  toggleCalendarModal() {
    this.setState({ calendarModalVisible: !this.state.calendarModalVisible })
  }

  render() {
    const keys = Object.keys(MEDICATIONS_LIST)
    const classes = keys.map(key => MEDICATIONS_LIST[key].name)

    return (
      <Content>
        <Form>
          <Item fixedLabel>
            <Label>Class</Label>
            <Picker
              iosHeader="Class"
              mode="dropdown"
              selectedValue={this.props.class}
              onValueChange={value => this.onValueChangeClass(value)}
            >
              {classes.map((medClass, index) =>
                <Picker.Item key={index} label={medClass} value={medClass} />)}
            </Picker>

          </Item>
          <Item fixedLabel>
            <Label>Antibiotic</Label>
            <Picker
              iosHeader="Antibiotic"
              mode="dropdown"
              selectedValue={this.props.antibiotic}
              onValueChange={value => this.onValueChangeAntibiotic(value)}
            >
              {this.state.antibiotics.map((antibiotic, index) =>
                <Picker.Item key={index} label={antibiotic} value={antibiotic} />)}
            </Picker>
          </Item>
          <Item fixedLabel>
            <Label>Dose</Label>
            <Picker
              iosHeader="Dose"
              mode="dropdown"
              selectedValue={this.props.dose}
              onValueChange={value => this.onValueChangeDose(value)}
            >
              {DOSE.map((dose, index) =>
                <Picker.Item key={index}
                  label={dose} value={dose} itemTextStyle={styles.itemStyle}
                />)}
            </Picker>
          </Item>
          <Item fixedLabel>
            <Label>Frequency</Label>
            <Picker
              iosHeader="Frequency"
              mode="dropdown"
              selectedValue={this.props.frequency}
              onValueChange={value => this.onValueChangeFrequency(value)}
            >
              {FREQUENCY.map((dose, index) =>
                <Picker.Item key={index}
                  label={dose} value={dose} itemTextStyle={styles.itemStyle}
                />)}
            </Picker>
          </Item>
          <Item fixedLabel>
            <Label>Route</Label>
            <Picker
              iosHeader="Route"
              mode="dropdown"
              selectedValue={this.props.route}
              onValueChange={value => this.onValueChangeRoute(value)}
            >
              {ROUTE.map((dose, index) =>
                <Picker.Item key={index}
                  label={dose} value={dose} itemTextStyle={styles.itemStyle}
                />)}
            </Picker>
          </Item>
          <Item fixedLabel>
            <Label>Start</Label>
            <TouchableHighlight onPress={() => this.toggleCalendarModal()}><Text>{this.props.start.toLocaleDateString('en-AU')}</Text></TouchableHighlight>
          </Item>
          <Item fixedLabel>
            <Label>End</Label>
            <TouchableHighlight onPress={() => this.toggleCalendarModal()}><Text>{this.props.end.toLocaleDateString('en-AU')}</Text></TouchableHighlight>
          </Item>
        </Form>
        <CalendarModal
          modalVisible={this.state.calendarModalVisible}
          toggleCalendarModal={() => this.toggleCalendarModal()}
          title={'Medication Start - End'}
          allowRangeSelection
          setStartDate={date => this.setStartDate(date)}
          setEndDate={date => this.setEndDate(date)}
        />
      </Content>

    )
  }
}

const mapStateToProps = state => ({
  class: state.medicine.medicineClass,
  antibiotic: state.medicine.antibiotic,
  dose: state.medicine.dose,
  frequency: state.medicine.frequency,
  route: state.medicine.route,
  start: state.medicine.start,
  end: state.medicine.end,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(ActionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(MedicationScreen)
