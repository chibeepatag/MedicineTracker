import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Header, Title, Left, Right, Body, Button, Icon, Tabs, Tab, Footer, FooterTab, Toast } from 'native-base'
import { ActionCreators } from '../actions'
import PatientScreen from './patientScreen'
import EventScreen from './eventScreen'
import MedicationScreen from './medicineScreen'
import ReportScreen from './reportScreen'

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
        duration: 1500,
      })
    } else if (this.state.currentTab === 2) {
      const medicine = this.props.medicine
      this.props.addMedicine(medicine)
      Toast.show({
        text: 'Medicine added!',
        position: 'bottom',
        duration: 1500,
      })
    }
  }

  send() {
    Toast.show({
      text: 'Report sent!',
      position: 'bottom',
      duration: 1500,
    })
  }

  render() {
    let footerButton = null
    if ([1, 2].includes(this.state.currentTab)) {
      footerButton = <Button full onPress={() => this.add()}><Text>Add</Text></Button>
    } else if (this.state.currentTab === 3) {
      footerButton = <Button full onPress={() => this.send()}><Text>Send</Text></Button>
    }
    return (
      <Container>
        <Header>
          <Body>
            <Title>Medicine Tracker</Title>
          </Body>
        </Header>
        <Tabs onChangeTab={event => this.changeTab(event)}>
          <Tab heading="Patient">
            <PatientScreen />
          </Tab>
          <Tab heading="Event">
            <EventScreen />
          </Tab>
          <Tab heading="Medicine">
            <MedicationScreen />
          </Tab>
          <Tab heading="Report">
            <ReportScreen />
          </Tab>
        </Tabs>
        <Footer>
          <FooterTab>
            {footerButton}
          </FooterTab>
        </Footer>
      </Container>)
  }
}

const mapStateToProps = state => ({
  event: state.event,
  medicine: state.medicine
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
