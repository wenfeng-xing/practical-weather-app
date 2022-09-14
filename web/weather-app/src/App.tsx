import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {Grid, styled, Paper} from "@mui/material"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <Grid container>
          <Grid container className="nav-container">
            <h2>Nav</h2>
          </Grid>
          <Grid container className="main-container" row-spacing={2} columns={14} justifyContent="space-around">
            <Grid item xl={7} className="main-item first-row">
              <h2>1</h2>
            </Grid>
            <Grid item xl={5} className="main-item first-row">
              <h2>2</h2>
            </Grid>
            <Grid item xl={7} className="main-item second-row">
              <h2>3</h2>
            </Grid>
            <Grid item xl={5} className="main-item second-row">
              <h2>4</h2>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default App
