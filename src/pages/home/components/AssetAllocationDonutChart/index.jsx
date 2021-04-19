import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

// Mui components
import Grid from '@material-ui/core/Grid'

import { DonutChart } from '../../../../components/DonutChart'

/**
 * Asset Allocation Donut Chart Component
 */
export const AssetAllocationDonutChart = () => {  

  const assetAllocationData = useSelector((state) =>
    _.get(state.data.homePage, 'asset', []),
  )

  const chartData = []
  var index = 0
  _.forEach(assetAllocationData, function (value, key) {
    const id = index + 1
    _.set(chartData, `${index}.id`, id)
    _.set(chartData, `${index}.name`, _.capitalize(key))
    _.set(chartData, `${index}.value`, value)
    index += 1
  })
  
  return (    
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <DonutChart chartData={chartData}/>
      </Grid>      
    </Grid>    
  )
}