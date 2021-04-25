import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import { Tile } from '../../components/Tile'
import { LeadingTechStocksLineChart } from './components/LeadingTechStocksLineChart'
import { AssetAllocationDonutChart } from './components/AssetAllocationDonutChart'
import { InvestmentRateOfReturnTile } from './components/InvestmentRateOfReturnTile'
import { fetchHomePageData } from '../../sagas/home_page/actions'

export const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomePageData())    
  },[])

  return (
    <Container maxWidth='lg'>
      <Grid 
        container 
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12}>
          <Tile title='Leading Tech Stocks'>
            <Grid item xs={12} >
              <LeadingTechStocksLineChart />
            </Grid>
          </Tile>
        </Grid>
        <Grid item xs={12}>
          <Tile title='Balance History'>
            <Grid item xs={12}>
              <InvestmentRateOfReturnTile />
            </Grid>
          </Tile>
        </Grid>
        <Grid item xs={12}>
          <Tile title='Asset Allocation'>
            <Grid item xs={12} >
              <AssetAllocationDonutChart />
            </Grid>
          </Tile>
        </Grid>        
      </Grid>
    </Container>
  )
}