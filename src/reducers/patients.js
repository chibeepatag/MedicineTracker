import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const setPatientURN = createReducer({}, {
  [types.SET_PATIENT_URN](state, action) {
    const newState = {
      ...state,
      patientUrn: action.payload,
    }
    return newState
  },
})

export const setPatientName = createReducer({}, {
  [types.SET_PATIENT_NAME](state, action) {
    const newState = {
      ...state,
      patientName: action.payload,
    }
    return newState
  },
})
