import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const patient = createReducer({}, {
  [types.SET_PATIENT_URN](state, action) {
    return { ...state, patientURN: action.payload }
  },
  [types.SET_PATIENT_NAME](state, action) {
    return { ...state, patientName: action.payload }
  },
})
