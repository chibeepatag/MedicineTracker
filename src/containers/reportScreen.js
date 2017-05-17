/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React from 'react'
import { StyleSheet } from 'react-native'
import { Content, List, ListItem, Text } from 'native-base'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

const styles = StyleSheet.create({
})

const ReportScreen = props => (
  <Content>
    <List>
      <ListItem itemDivider>
        <Text>Events</Text>
      </ListItem>
      {props.events.map((event, index) =>
        <ListItem key={index}><Text>{event.severity} {event.reaction}</Text></ListItem>
      )}
      <ListItem itemDivider>
        <Text>Medicines</Text>
      </ListItem>
      {props.medicines.map((medicine, index) =>
        <ListItem key={index}><Text>{medicine.antibiotic} {medicine.dose}</Text></ListItem>
      )}
    </List>
  </Content>
)

const mapStateToProps = state => ({
  patient: state.patient,
  events: state.events,
  medicines: state.medicines,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(ActionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ReportScreen)
