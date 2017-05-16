import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const patientURN = createReducer({}, {
  [types.SET_PATIENT_URN](state, action) {
    return action.payload
  },
})

export const patientName = createReducer({}, {
  [types.SET_PATIENT_NAME](state, action) {
    return action.payload
  },
})
