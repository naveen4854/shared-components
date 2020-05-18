import React, { useState } from 'react'

import { ToggleButton, Button, Input, Dialog, SideBar } from '@naveen4854/react-components'
import '@naveen4854/react-components/dist/index.css'


const App = () => {
  const [state1, setState1] = React.useState({ checked1: true });

  return (
    <>
      <ToggleButton checked={state1.checked1} onChange={(e) => setState1({ checked1: e.value })} />


      <Dialog header="Add user to CI Work Flow" open={state1.checked1}
        // style={{ width: '50vw' }}
        onHide={() => { }} maximizable={false}>
        <>
          <h1 >{'header'}</h1>
        </>
      </Dialog>
    </>
  )
}

export default App
