import createReducer from '../lib/createReducer'
import * as types from '../actions/types'
import Colors from './colors'

export const medicine = createReducer({}, {
  [types.SET_MEDICINE_CLASS](state, action) {
    return { ...state, medicineClass: action.payload }
  },
  [types.SET_MEDICINE_ANTIBIOTIC](state, action) {
    return { ...state, antibiotic: action.payload }
  },
  [types.SET_MEDICINE_DOSE](state, action) {
    return { ...state, dose: action.payload }
  },
  [types.SET_MEDICINE_FREQUENCY](state, action) {
    return { ...state, frequency: action.payload }
  },
  [types.SET_MEDICINE_ROUTE](state, action) {
    return { ...state, route: action.payload }
  },
  [types.SET_MEDICINE_START](state, action) {
    return { ...state, start: action.payload }
  },
  [types.SET_MEDICINE_END](state, action) {
    return { ...state, end: action.payload }
  },
})

export const medicines = createReducer({}, {
  [types.ADD_MEDICINE](state, action) {
    const newState = state.slice()
    const index = newState.length
    const color = Colors.medicines[index]
    const newMedicine = action.payload
    newMedicine.color = color
    newState.push(newMedicine)
    return newState
  },
})
