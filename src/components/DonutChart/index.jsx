import React from 'react'
import PropTypes from 'prop-types'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

// Mui components
import Grid from '@material-ui/core/Grid'
// Components
import { Legend } from '../Legend'
import { useStyles } from './styles'

/**
 * Donut Chart Component
 */
export const DonutChart = ( {chartData} ) => {
  const classes = useStyles()
  const SEVERIITY_COLORS = ['#59886B', '#9C5518', '#AACFCF', '#FDB827', '#035AA6', '#FFDCDC', ] 
   
  return (    
    <Grid container>
      <Grid item xs={12} >
        <ResponsiveContainer width='100%' height={400}>
          <PieChart width={800} height={400}>
            <Pie
              data={chartData}
              dataKey='value'
              cx='50%'
              cy='50%'
              innerRadius={150}
              outerRadius={165}
              paddingAngle={0}
              stroke=''
            >
              {chartData.map((entry, index) => (
                <Cell
                  fill={SEVERIITY_COLORS[index % SEVERIITY_COLORS.length]}
                  key={index}
                  name={entry.name}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Grid>
      <Grid item xs={12} className={classes.chartContainer}>
        <Legend
          chartData={chartData}
          chartColor={SEVERIITY_COLORS}
          valueNameField='name'
          valueField='value'
        />
      </Grid>
    </Grid>    
  )
}
DonutChart.propTypes = {
  chartData: PropTypes.array,
};