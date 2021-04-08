import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { store } from './store/store'
import { theme } from './styles/theme'

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
