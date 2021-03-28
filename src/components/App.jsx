import React from 'react'
import { Recipes } from './Recipes'
import sword from '../images/swc-sword.png'
// import swordSvg from '../images/sword.svg'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import { Tile } from './Tile'

export const App = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={2}>
        <Grid item xs={12}>        
          <Tile title='My Personal Webiste'>
            <Grid 
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Grid item xs={12}>
                <img src={sword} alt='sword' width='250' />
              </Grid>
              <Grid item xs={12}>          
                <Recipes />          
              </Grid>          
            </Grid>
          </Tile>
        </Grid>
      </Grid>
    </Container>
  )
}