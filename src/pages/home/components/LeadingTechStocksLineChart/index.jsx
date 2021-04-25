import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

// Mui components
import Grid from '@material-ui/core/Grid'

import { StockLineChart } from '../../../../components/StockLineChart'

/**
 * Asset Allocation Donut Chart Component
 */
export const LeadingTechStocksLineChart = () => {  

  const chartData = useSelector((state) =>
    _.get(state.data.homePage, 'data', []),
  )
    
  const SERIES_PROPS_FB = [
    {
      dataKey: 'FB',
      tooltipName: 'FB',      
      lineColor: '#59886B',
    },    
  ]
  const SERIES_PROPS_AAPL = [
    {
      dataKey: 'AAPL',
      tooltipName: 'AAPL',
      lineColor: '#9C5518',
    },    
  ]
  const SERIES_PROPS_NFLX = [    
    {
      dataKey: 'NFLX',
      tooltipName: 'NFLX',
      lineColor: '#AACFCF',
    },    
  ]
  const SERIES_PROPS_GOOG = [    
    {
      dataKey: 'GOOG',
      tooltipName: 'GOOG',
      lineColor: '#FDB827',
    },
  ]
    
  return (    
    <Grid container>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <StockLineChart 
          chartData={chartData} 
          seriesProps={SERIES_PROPS_FB}
          xTooltipName='Date'
          xDataKey='date'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <StockLineChart 
          chartData={chartData} 
          seriesProps={SERIES_PROPS_AAPL}
          xTooltipName='Date'
          xDataKey='date'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <StockLineChart 
          chartData={chartData} 
          seriesProps={SERIES_PROPS_NFLX}
          xTooltipName='Date'
          xDataKey='date'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <StockLineChart 
          chartData={chartData} 
          seriesProps={SERIES_PROPS_GOOG}
          xTooltipName='Date'
          xDataKey='date'
        />
      </Grid>   
    </Grid>    
  )
}
