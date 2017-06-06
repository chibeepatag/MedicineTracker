/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Calendar from 'react-native-calendar'
import { Content } from 'native-base'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import EmailModal from './emailModal'
import Colors from './calendarIndicators'


const styles = StyleSheet.create({
  weekendHeading: {
    color: 'black',
  },
  weekendDayText: {
    color: 'black',
  },
  medicineIndicator: {
    width: 10,
    height: 10,
  },
  table: {
    flexDirection: 'row',
    flex: 1,
    padding: 3,
  },
  eventsColumn: {
    flex: 1,
  },
  medicinesColumn: {
    flex: 1,
  },
})

type Props = {
  events: [],
  medicines: [],
  toggleEmailModal: Function,
  emailModalVisible: boolean,
}

class ReportScreen extends Component {
  props: Props // eslint-disable-line react/sort-comp
  state: Object // eslint-disable-line react/sort-comp

  constructor(props) {
    super(props)
    this.state = {
      emailModalVisible: true,
      selectedDate: '',
    }
  }

  onDateSelect(date) {
    this.setState({ selectedDate: date })
  }

  render() {
    return (
      <Content>
        <Calendar
          showControls
          showEventIndicators // medicine square - eventIndicator, event circle - hasEventCircle
          events={[{ date: '2017-06-03', eventIndicator: [styles.medicineIndicator, { backgroundColor: Colors.medicines[0] }], hasEventCircle: { backgroundColor: Colors.events[0] } },
                   { date: '2017-06-04', eventIndicator: [styles.medicineIndicator, { backgroundColor: Colors.medicines[0] }] },
                   { date: '2017-06-05', eventIndicator: [styles.medicineIndicator, { backgroundColor: Colors.medicines[0] }] },
                   { date: '2017-06-06', eventIndicator: [styles.medicineIndicator, { backgroundColor: Colors.medicines[0] }], hasEventCircle: { backgroundColor: Colors.events[1] } },
                   { date: '2017-06-07', eventIndicator: [styles.medicineIndicator, { backgroundColor: Colors.medicines[1] }] },
                   { date: '2017-06-08', eventIndicator: [styles.medicineIndicator, { backgroundColor: Colors.medicines[1] }] },
                   { date: '2017-06-11', eventIndicator: [styles.medicineIndicator, { backgroundColor: Colors.medicines[2] }] },
                   { date: '2017-06-12', eventIndicator: [styles.medicineIndicator, { backgroundColor: Colors.medicines[2] }], hasEventCircle: { backgroundColor: Colors.events[2] } },
                   { date: '2017-06-13', eventIndicator: [styles.medicineIndicator, { backgroundColor: Colors.medicines[2] }], hasEventCircle: { backgroundColor: Colors.events[3] } },
                   { date: '2017-06-14', eventIndicator: [styles.medicineIndicator, { backgroundColor: Colors.medicines[3] }] },
                   { date: '2017-06-21', eventIndicator: [styles.medicineIndicator, { backgroundColor: Colors.medicines[4] }] },
                   { date: '2017-06-22', eventIndicator: [styles.medicineIndicator, { backgroundColor: Colors.medicines[4] }] },
                   { date: '2017-06-23', eventIndicator: [styles.medicineIndicator, { backgroundColor: Colors.medicines[5] }], hasEventCircle: { backgroundColor: Colors.events[4] } },
                   { date: '2017-06-24', eventIndicator: [styles.medicineIndicator, { backgroundColor: Colors.medicines[5] }] },
          ]
                 }
          customStyle={styles}
          onDateSelect={date => this.onDateSelect(date)}
        />
        <View style={styles.table}>
          <View style={styles.eventsColumn}>
            <Text>Events</Text>
            <Text>{this.state.selectedDate}</Text>
          </View>
          <View style={styles.medicinesColumn}><Text>Medicines</Text></View>
        </View>
        <EmailModal modalVisible={this.props.emailModalVisible} title="Send Report to" toggleEmailModal={() => this.props.toggleEmailModal()} />
      </Content>
    )
  }
}

const mapStateToProps = state => ({
  patient: state.patient,
  events: state.events,
  medicines: state.medicines,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(ActionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ReportScreen)
