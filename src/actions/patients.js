import * as types from './types'

export const setPatientURN = (urn: string) => ({
  type: types.SET_PATIENT_URN,
  payload: urn
})

export const setPatientName = (name: string) => ({
  type: types.SET_PATIENT_NAME,
  payload: name
})
