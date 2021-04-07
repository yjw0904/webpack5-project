import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import { Tile } from './Tile'
import { FullSizeLineChart } from './FullSizeLineChart'

export const App = () => {
  return (
    <Container maxWidth='lg'>
      <Grid 
        container 
        spacing={2}        
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12}>        
          <Tile title='My Personal Webiste'>            
            <Grid item xs={12} >
              <FullSizeLineChart />
            </Grid>            
          </Tile>
        </Grid>
      </Grid>
    </Container>
  )
}