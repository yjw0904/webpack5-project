import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

// Mui components
import Grid from '@material-ui/core/Grid'

import { FullSizeLineChart } from '../../../../components/FullSizeLineChart'

/**
 * Asset Allocation Donut Chart Component
 */
export const LeadingTechStocksLineChart = () => {  

  const chartData = useSelector((state) =>
    _.get(state.data.homePage, 'data', []),
  )
    
  const SERIES_PROPS = [
    {
      dataKey: 'IBM',
      tooltipName: 'IBM',      
      lineColor: '#59886B',
    },
    {
      dataKey: 'AAPL',
      tooltipName: 'AAPL',      
      lineColor: '#9C5518',
    },
  ]
    
  return (    
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <FullSizeLineChart 
          chartData={chartData} 
          seriesProps={SERIES_PROPS}
          xTooltipName='Date'
          xDataKey='name'
        />
      </Grid>      
    </Grid>    
  )
}
