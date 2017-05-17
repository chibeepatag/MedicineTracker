import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Header, Title, Left, Right, Body, Button, Icon, Tabs, Tab, Footer, FooterTab, Toast } from 'native-base'
import { ActionCreators } from '../actions'
import PatientScreen from './patientScreen'
import EventScreen from './eventScreen'

class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 0,
    }
  }

  changeTab(event) {
    this.setState({ currentTab: event.i })
  }

  add() {
    if (this.state.currentTab === 1) {
      const event = this.props.event
      this.props.addEvent(event)
      Toast.show({
        text: 'Event added!',
        position: 'bottom',
        duration: 3000,
      })
    } else if (this.state.currentTab === 2) {
      Toast.show({
        text: 'Medicine added!',
        position: 'bottom',
        duration: 3000,
      })
    }
  }

  render() {
    let addButton = null
    if ([1, 2].includes(this.state.currentTab)) {
      addButton = <Button full onPress={() => this.add()}><Text>Add</Text></Button>
    }
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
        <Tabs onChangeTab={event => this.changeTab(event)}>
          <Tab heading="Patient">
            <PatientScreen />
          </Tab>
          <Tab heading="Event">
            <EventScreen />
          </Tab>
          <Tab heading="Medications">
            <View><Text>Celine </Text></View>
          </Tab>
        </Tabs>
        <Footer>
          <FooterTab>
            {addButton}
          </FooterTab>
        </Footer>
      </Container>)
  }
}

const mapStateToProps = state => ({
  event: state.event,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
