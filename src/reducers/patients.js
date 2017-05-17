import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const patientURN = createReducer({ patientURN: '' }, {
  [types.SET_PATIENT_URN](state, action) {
    return action.payload
  },
})

export const patientName = createReducer({ patientName: '' }, {
  [types.SET_PATIENT_NAME](state, action) {
    return action.payload
  },
})
