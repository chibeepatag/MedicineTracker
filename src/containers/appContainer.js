import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Header, Title, Left, Right, Body, Button, Icon, Tabs, Tab } from 'native-base'
import { ActionCreators } from '../actions'
import PatientScreen from './patientScreen'
import EventScreen from './eventScreen'

class AppContainer extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Medicine Tracker</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading="Patient">
            <PatientScreen />
          </Tab>
          <Tab heading="Event">
            <EventScreen />
          </Tab>
          <Tab heading="Medications">
            <View><Text>jkjk</Text></View>
          </Tab>
        </Tabs>
      </Container>)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}
export default connect(() => ({}), mapDispatchToProps)(AppContainer)
