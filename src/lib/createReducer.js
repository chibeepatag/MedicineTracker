export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) { // eslint-disable-line no-prototype-builtins
      return handlers[action.type](state, action)
    }
    return state
  }
}
