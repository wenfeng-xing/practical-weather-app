import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {Grid, styled, Paper} from "@mui/material"
import PrimarySearchAppBar from "./nav";
import ActionAreaCard from "./main-item";

function App() {
  return (
    <div className="App">
        <Grid container lg={12}>
          <Grid container className="nav-container">
            <PrimarySearchAppBar/>
          </Grid>
          <Grid container className="main-container" row-spacing={2} columns={16} justifyContent="space-around">
            <Grid item lg={9} className="main-item first-row">
              <ActionAreaCard height='75%'/>
            </Grid>
            <Grid item lg={6} className="main-item first-row">
              <ActionAreaCard height='140'/>
            </Grid>
            <Grid item lg={9} className="main-item second-row">
              <ActionAreaCard height='400'/>
            </Grid>
            <Grid item lg={6} className="main-item second-row">
              <ActionAreaCard height='400'/>
            </Grid>
          </Grid>
        </Grid>
    </div>
  )
}

export default App
