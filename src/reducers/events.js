import createReducer from '../lib/createReducer'
import * as types from '../actions/types'
import Colors from './colors'

export const event = createReducer({}, {
  [types.SET_EVENT_DATE](state, action) {
    return { ...state, date: action.payload }
  },
  [types.SET_EVENT_SEVERITY](state, action) {
    return { ...state, severity: action.payload }
  },
  [types.SET_EVENT_ORGAN](state, action) {
    return { ...state, organ: action.payload }
  },
  [types.SET_EVENT_REACTION](state, action) {
    return { ...state, reaction: action.payload }
  },
})

export const events = createReducer({}, {
  [types.ADD_EVENT](state, action) {
    const newState = state.slice()
    const index = newState.length
    const color = Colors.events[index]
    const newEvent = action.payload
    newEvent.color = color
    newState.push(newEvent)
    return newState
  },
})
