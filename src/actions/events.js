import * as types from './types'

export const setEventDate = urn => ({
  type: types.SET_EVENT_DATE,
  payload: urn,
})

export const setEventSeverity = severity => ({
  type: types.SET_EVENT_SEVERITY,
  payload: severity,
})

export const setEventOrgan = organ => ({
  type: types.SET_EVENT_ORGAN,
  payload: organ,
})

export const setEventReaction = reaction => ({
  type: types.SET_EVENT_REACTION,
  payload: reaction,
})

export const addEvent = event => ({
  type: types.ADD_EVENT,
  payload: event,
})
