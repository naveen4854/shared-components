import React, { useState } from 'react'

import { ExampleComponent } from '@naveen4854/shared-components'
import '@naveen4854/shared-components/dist/index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => {

  return (
    <MuiThemeProvider>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <ExampleComponent text="Create React Library Example 😄" />
      </div>
    </MuiThemeProvider>)
}

export default App
