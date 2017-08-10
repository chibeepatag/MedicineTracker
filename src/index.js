/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { Root } from 'native-base'
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

const store = configureStore({
  event: {
    date: new Date(),
    severity: 'Mild',
    organ: 'Skin',
    reaction: 'Uticaria',
  },
  events: [],
  medicine: {
    medicineClass: 'Aminoglycosides',
    antibiotic: 'Amikacin',
    dose: '50mg',
    frequency: 'Daily',
    route: 'PO',
    start: new Date(),
    end: new Date(),
  },
  medicines: [],
})

const App = () => (
  <Provider store={store}>
    <Root>
      <AppContainer />
    </Root>
  </Provider>
)

export default App
