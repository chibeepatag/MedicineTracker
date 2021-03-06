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
  columnHeader: {
    fontWeight: 'bold',
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
      eventsOnDay: [],
      medicinesOnDay: [],
    }
  }

  summarize() {
    const dates = this.getArrayOfDates()
    const events = this.props.events
    const medicines = this.props.medicines

    const data = {}
    dates.map((date) => {
      const eventsOnDay = events.filter(event => event.date.toLocaleDateString() === date.toLocaleDateString())
      const medicinesOnDay = medicines.filter(medicine => (medicine.start.getTime() <= date.getTime() && medicine.end.getTime() >= date.getTime()))
      data[date] = { events: eventsOnDay, medicines: medicinesOnDay }
      return data[date]
    }
    )
    return data
  }

  onDateSelect(date) {
    const dateObj = new Date(date)
    const data = this.summarize()
    console.log('date param', date)
    console.log('date object', dateObj)
    console.log('data', data)
    console.log(data[dateObj])
    if (data[dateObj]) {
      const eventsOnDay = data[dateObj].events
      const medicinesOnDay = data[dateObj].medicines
      this.setState({ selectedDate: date, eventsOnDay, medicinesOnDay })
    }
  }

  getArrayOfDates() {
    const startDate = this.getMinimumDate()
    const endDate = this.getMaximumDate()

    const oneDay = 86400000
    const dates = []

    for (let i = startDate.getTime(); i <= endDate.getTime(); i += oneDay) {
      dates.push(new Date(i))
    }
    return dates
  }

  getMinimumDate() {
    const events = this.props.events
    const medicines = this.props.medicines
    let minEventDate = new Date()
    let minMedDate = new Date()
    events.map((event) => {
      if (event.date.getTime() < minEventDate.getTime()) {
        minEventDate = event.date
      }
      return 0
    })
    medicines.map((medicine) => {
      if (medicine.start.getTime() < minMedDate.getTime()) {
        minMedDate = medicine.start
      }
      return 0
    })

    let minDate = minEventDate
    if (minEventDate.getTime() > minMedDate.getTime()) {
      minDate = minMedDate
    }
    return minDate
  }

  getMaximumDate() {
    const events = this.props.events
    const medicines = this.props.medicines
    let maxEventDate = new Date('2000-01-01')
    let maxMedDate = new Date('2000-01-01')
    events.map((event) => {
      if (event.date.getTime() > maxEventDate.getTime()) {
        maxEventDate = event.date
      }
      return 0
    })
    medicines.map((medicine) => {
      if (medicine.end.getTime() > maxMedDate.getTime()) {
        maxMedDate = medicine.end
      }
      return 0
    })

    let maxDate = maxEventDate
    if (maxEventDate.getTime() < maxMedDate.getTime()) {
      maxDate = maxMedDate
    }
    return maxDate
  }

  eventIndicators() {
    const dates = this.getArrayOfDates()
    const data = this.summarize()

    const eventIndicators = []
    dates.map((date) => {
      const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
      const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth()
      const dateString = `${date.getFullYear()}-${month}-${day}`
      const events = data[date].events
      const medicines = data[date].medicines
      if (events.length > 0 || medicines.length > 0) {
        const indicator = { date: dateString }
        if (events.length > 0) {
          indicator.hasEventCircle = { backgroundColor: events[0].color }
        }
        if (medicines.length > 0) {
          indicator.eventIndicator = { width: 10, height: 10, backgroundColor: medicines[0].color }
        }
        eventIndicators.push(indicator)
      }
    })
    return eventIndicators
  }

  render() {
    const startDate = this.getMinimumDate()
    const day = startDate.getDate() < 10 ? `0${startDate.getDate()}` : startDate.getDate()
    const month = startDate.getMonth() < 9 ? `0${startDate.getMonth() + 1}` : startDate.getMonth()
    const startDateString = `${startDate.getFullYear()}-${month}-${day}`
    const eventIndicators = this.eventIndicators()
    return (
      <Content>
        <Calendar
          showControls
          showEventIndicators // medicine square - eventIndicator, event circle - hasEventCircle
          startDate={startDateString}
          events={eventIndicators}
          customStyle={styles}
          onDateSelect={date => this.onDateSelect(date)}
        />
        <View style={styles.table}>
          <View style={styles.eventsColumn}>
            <Text style={styles.columnHeader}>Events</Text>
            {this.state.eventsOnDay.map((event, index) =>
              <Text key={index}>{event.severity}-{event.reaction}</Text>
            )}
          </View>
          <View style={styles.medicinesColumn}>
            <Text style={styles.columnHeader}>Medicines</Text>
            {this.state.medicinesOnDay.map((medicine, index) =>
              <Text key={index} style={{ fontSize: 10 }}>{medicine.antibiotic}-{medicine.dose}-{medicine.frequency}</Text>
            )}
          </View>
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
