/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/
import React, { Component } from 'react'
import { Content, Form, Item, Input, Label } from 'native-base'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

type Props = {
    setPatientURN: Function,
    setPatientName: Function,
}

class PatientScreen extends Component {
  props: Props // eslint-disable-line react/sort-comp

  setURN(text) {
    this.props.setPatientURN(text)
  }

  setName(text) {
    this.props.setPatientName(text)
  }
  render() {
    return (
      <Content>
        <Form>
          <Item inlineLabel>
            <Label>URN</Label>
            <Input onEndEditing={event => this.setURN(event.nativeEvent.text)} />
          </Item>
          <Item inlineLabel last>
            <Label>Name</Label>
            <Input onEndEditing={event => this.setName(event.nativeEvent.text)} />
          </Item>
        </Form>
      </Content>
    )
  }
}

const mapStateToProps = state => ({
  patientName: state.patientName,
  patientURN: state.patientURN,
})
const mapDispatchToProps = dispatch => (
  bindActionCreators(ActionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(PatientScreen)
