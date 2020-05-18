import React, { useState } from 'react'

import { ToggleButton } from '@naveen4854/react-components'
import '@naveen4854/react-components/dist/index.css'


const App = () => {
  const [state1, setState1] = React.useState({ checked1: true });

  return (
    <ToggleButton checked={state1.checked1} onChange={(e) => setState1({ checked1: e.value })} />
  )
}

export default App
