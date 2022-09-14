import React from 'react'
import './App.css'

import {Grid} from "@mui/material"
import PrimarySearchAppBar from "./components/nav";

function App() {
  return (
    <div className="App">
        <Grid container lg={12} rowGap={4}>
          <Grid container>
            <PrimarySearchAppBar/>
          </Grid>
          <Grid container justifyContent="space-around" sx={{bgcolor: 'aqua', minHeight: '90vh', borderRadius: '15px' }}>

          </Grid>
        </Grid>
    </div>
  )
}

export default App
