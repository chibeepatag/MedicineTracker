import { combineReducers } from 'redux'
import * as patientsReducers from './patients'
import * as eventsReducers from './events'
import * as medicinesReduces from './medicines'

export default combineReducers(Object.assign(patientsReducers, eventsReducers, medicinesReduces))
