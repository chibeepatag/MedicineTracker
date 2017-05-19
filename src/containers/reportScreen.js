/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react'
import { Content, List, ListItem, Text } from 'native-base'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import EmailModal from './emailModal'

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
    }
  }

  render() {
    return (
      <Content>
        <List>
          <ListItem itemDivider>
            <Text>Events</Text>
          </ListItem>
          {this.props.events.map((event, index) =>
            <ListItem key={index}>
              <Text>{event.severity} {event.reaction}</Text>
            </ListItem> // eslint-disable-line  comma-dangle
          )}
          <ListItem itemDivider>
            <Text>Medicines</Text>
          </ListItem>
          {this.props.medicines.map((medicine, index) =>
            <ListItem key={index}>
              <Text>{medicine.antibiotic} {medicine.dose}</Text>
            </ListItem> // eslint-disable-line  comma-dangle
          )}
        </List>
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
