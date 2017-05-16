/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
 Text,
 TouchableHighlight,
 StyleSheet,
 View
} from 'react-native';
import { Content,
        Form,
        Item,
        Input,
        Label,
        Picker,
        Card,
        CardItem} from 'native-base';
import CalendarModal from './calendarModal'
import ORGAN_REACTION_LIST from './organReactionList.json'

export default class EventScreen extends Component {
 constructor(props) {
   super(props);
   this.state = {
     calendarModalVisible: false,
     reactions: ORGAN_REACTION_LIST['skin']['reactions'],
   };
 }

 toggleCalendarModal(){
     this.setState({calendarModalVisible: !this.state.calendarModalVisible});
 }

 setEventDate(date){
   console.log('eventDate', date);
 }

 setSeverity(value){
   console.log('severity', value);
 }

 setOrgan(value){
   keys = Object.keys(ORGAN_REACTION_LIST)
   key = keys.find((key) => ORGAN_REACTION_LIST[key]['organ'] === value)
   this.setState({reactions: ORGAN_REACTION_LIST[key]['reactions']})
   console.log('organ', value);
 }

 setReaction(value: string){
   console.log('reaction', value);
 }

 render() {
   keys = Object.keys(ORGAN_REACTION_LIST)
   organs = keys.map((key) => ORGAN_REACTION_LIST[key]['organ'])

   return (
       <Content>
         <Form>
           <Item fixedLabel>
            <Label>Date</Label>
            <TouchableHighlight style={styles.dateLabel}
                                onPress={this.toggleCalendarModal.bind(this)}>
             <Text style={styles.dateText}>16 May 2017</Text>
            </TouchableHighlight>
           </Item>
           <Item fixedLabel>
             <Label>Severity</Label>
             <Picker
                       iosHeader="Select one"
                       mode="dropdown"
                       selectedValue="Mild"
                       onValueChange={this.setSeverity.bind(this)}>
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
                      selectedValue="Skin"
                      onValueChange={this.setOrgan.bind(this)}>
                      {organs.map((organ, index) => <Picker.Item  key={index} label={organ}  value={organ} />)}
             </Picker>
           </Item>
           <Item fixedLabel>
            <Label>Reaction</Label>
            <Picker
                      iosHeader="Select one"
                      mode="dropdown"
                      selectedValue="Uticaria"
                      onValueChange={this.setReaction.bind(this)}>
                      {this.state.reactions.map((reaction, index) => <Picker.Item  key={index} label={reaction}  value={reaction} />)}
             </Picker>
           </Item>
         </Form>
         <CalendarModal modalVisible={this.state.calendarModalVisible} toggleCalendarModal={this.toggleCalendarModal.bind(this)} title={'Event Date '} allowRangeSelection={false} setStartDate={this.setEventDate.bind(this)} setEndDate={null}/>
       </Content>
   );
 }
}

const styles = StyleSheet.create({
 dateLabel: {
   height: 46
 },
 dateText:{
   paddingTop: 15
 }
})
