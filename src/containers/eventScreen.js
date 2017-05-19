/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'
import { Content, Form, Item, Label, Picker } from 'native-base'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import CalendarModal from './calendarModal'
import ORGAN_REACTION_LIST from './organReactionList.json'

const styles = StyleSheet.create({
  dateLabel: {
    height: 46,
  },
  dateText: {
    paddingTop: 15,
  },
})

type Props = {
  date: Object,
  severity: string,
  organ: string,
  reaction: string,
  setEventDate: Function,
  setEventSeverity: Function,
  setEventOrgan: Function,
  setEventReaction: Function,
}

type State = {
  calendarModalVisible: boolean,
  reactions: [],
}

class EventScreen extends Component {
  props: Props // eslint-disable-line react/sort-comp
  state: State // eslint-disable-line react/sort-comp
  constructor(props) {
    super(props)
    this.state = {
      calendarModalVisible: false,
      reactions: ORGAN_REACTION_LIST.skin.reactions,
    }
  }

  setReaction(value: string) {
    this.props.setEventReaction(value)
  }

  setOrgan(value: string) {
    const keys = Object.keys(ORGAN_REACTION_LIST)
    const key = keys.find(item => ORGAN_REACTION_LIST[item].organ === value)
    this.setState({ reactions: ORGAN_REACTION_LIST[key].reactions })
    this.props.setEventOrgan(value)
  }

  setSeverity(value: string) {
    this.props.setEventSeverity(value)
  }

  setEventDate(date) {
    this.props.setEventDate(date)
  }

  toggleCalendarModal() {
    this.setState({ calendarModalVisible: !this.state.calendarModalVisible })
  }

  render() {
    const keys = Object.keys(ORGAN_REACTION_LIST)
    const organs = keys.map(key => ORGAN_REACTION_LIST[key].organ)

    return (
      <Content>
        <Form>
          <Item fixedLabel>
            <Label>Date</Label>
            <TouchableHighlight
              style={styles.dateLabel}
              onPress={() => this.toggleCalendarModal()}
            >
              <Text style={styles.dateText}>{this.props.date.toLocaleDateString('en-AU')}</Text>
            </TouchableHighlight>
          </Item>
          <Item fixedLabel>
            <Label>Severity</Label>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.props.severity}
              onValueChange={value => this.setSeverity(value)}
            >
              <Picker.Item label="Mild" value="Mild" />
              <Picker.Item label="Moderate" value="Moderate" />
              <Picker.Item label="Severe" value="Severe" />
            </Picker>
          </Item>
          <Item fixedLabel>
            <Label>Organ</Label>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.props.organ}
              onValueChange={value => this.setOrgan(value)}
            >
              {organs.map((organ, index) =>
                <Picker.Item key={index} label={organ} value={organ} />)}
            </Picker>
          </Item>
          <Item fixedLabel>
            <Label>Reaction</Label>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.props.reaction}
              onValueChange={value => this.setReaction(value)}
            >
              {this.state.reactions.map((reaction, index) =>
                <Picker.Item key={index} label={reaction} value={reaction} />)}
            </Picker>
          </Item>
        </Form>
        <CalendarModal
          modalVisible={this.state.calendarModalVisible}
          toggleCalendarModal={() => this.toggleCalendarModal()}
          title="Event Date" allowRangeSelection={false}
          setStartDate={date => this.setEventDate(date)} setEndDate={null}
        />
      </Content>
    )
  }
}

const mapStateToProps = state => ({
  date: state.event.date,
  severity: state.event.severity,
  organ: state.event.organ,
  reaction: state.event.reaction,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(ActionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen)
