// @flow
import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Header, Title, Body, Button, Tabs, Tab, Footer, FooterTab, Toast } from 'native-base'
import { ActionCreators } from '../actions'
import PatientScreen from './patientScreen'
import EventScreen from './eventScreen'
import MedicationScreen from './medicineScreen'
import ReportScreen from './reportScreen'
import sendEmail from '../lib/email'

type Props = {
  event: Object,
  medicine: Object,
  addEvent: Function,
  addMedicine: Function,
}

type State = {
  currentTab: number,
  emailModalVisible: boolean,
}

class AppContainer extends Component {
  props: Props
  state: State // eslint-disable-line react/sort-comp

  constructor(props) {
    super(props)
    this.state = {
      currentTab: 0,
      emailModalVisible: false,
    }
  }

  changeTab(event) {
    this.setState({ currentTab: event.i })
  }

  toggleEmailModal() {
    console.log(this.state.emailModalVisible)
    this.setState({ emailModalVisible: !this.state.emailModalVisible })
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
    this.toggleEmailModal()
  }

  render() {
    let footerButton = null
    if ([1, 2].includes(this.state.currentTab)) {
      footerButton = <Button full onPress={() => this.add()}><Text>Add</Text></Button>
    } else if (this.state.currentTab === 3) {
      footerButton = <Button full onPress={() => this.send()}><Text>Email</Text></Button>
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
            <ReportScreen
              emailModalVisible={this.state.emailModalVisible}
              toggleEmailModal={() => this.toggleEmailModal()}
            />
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
  medicine: state.medicine,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
