import * as React from 'react'
import styles from './styles.module.css'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { ToggleButton } from 'primereact/togglebutton';

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  const [state, setState] = React.useState(1);
  const [state1, setState1] = React.useState({ checked1: true });

  return (
    <React.Fragment>
      <div className={styles.test}>Exampleasd Component: {text}</div>
      <h1>{state}</h1>
      <button onClick={() => setState(v => v + 1)}>test</button>

      <ToggleButton checked={state1.checked1} onChange={(e) => setState1({ checked1: e.value })} />


      <Paper className={styles.container}>
        <p>Example Material-UI Component: {text}</p>

        <TextField
          className={styles.textField}
          floatingLabelText='TextField Example'
          fullWidth={true}
        />

        <RaisedButton
          label='RaisedButton Example'
          primary={true}
        />
      </Paper>
    </React.Fragment>
  )
}
