/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import AppContainer from './containers/appContainer'

// eslint-disable-next-line no-undef, no-unused-vars
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  )
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

export default App
