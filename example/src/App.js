import React, { useState } from 'react'

import { ToggleButton, Button, Input, Dialog, SideBar, Map } from '@naveen4854/react-components'
import '@naveen4854/react-components/dist/index.css'
import mapData2 from './world';

// import Map from '@naveen4854/react-components/dist/components/map/map'

const App = () => {
  const [state1, setState1] = React.useState({ checked1: true });

  return (
    <>
      <ToggleButton checked={state1.checked1} onChange={(e) => setState1({ checked1: e.value })} />
      <div style={{ height: 1000, width: 1000 }}>
        <Map paths={mapData2} countries={[]} selectedCountries={[]} />
      </div>
    </>
  )
}

export default App
