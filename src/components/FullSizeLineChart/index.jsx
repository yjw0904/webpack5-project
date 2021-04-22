import React, { useState } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import "regenerator-runtime/runtime.js"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'


export const FullSizeLineChart = ({chartData, seriesProps, xDataKey, xTooltipName}) => {
    
  const lineGraph = seriesProps.map((series, index) => {
    return (      
      <Line type="monotone" dataKey={series.dataKey} stroke={series.lineColor} key={index} strokeWidth={2}/>
    )
  })

  const [currentXTooltipValue, setCurrentXTooltipValue] = useState(undefined)
  const [currentYTooltipValues, setCurrentYTooltipValues] = useState([])
  const handleMouseMove = (mousePositionData) => {
    setCurrentXTooltipValue(
      _.get(chartData, `${mousePositionData.activeTooltipIndex}.${xDataKey}`),
    )
    const yTooltipValuesArray = []
    seriesProps.forEach((series, index) => {
      const value = _.get(
        chartData,
        `${mousePositionData.activeTooltipIndex}.${series.dataKey}`,
      )
      _.set(yTooltipValuesArray, `${index}`, value)
    })
    setCurrentYTooltipValues(yTooltipValuesArray)
  }
  const customTooltip = () => {
    if (currentXTooltipValue) {
      return (
        <span>
          {xTooltipName}: {currentXTooltipValue}
          {seriesProps.map((series, index) => {
            return (
              <span key={`tooltip-${index}`}>
                {',  '}
                {series.tooltipName}
                {':  '}
                {currentYTooltipValues[index]}
              </span>
            )
          })}
        </span>
      )
    } else {
      return null
    }
  }
  
  
  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart        
        data={chartData}        
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        fontSize={14}
        onMouseMove={handleMouseMove}
      >
        <CartesianGrid stroke='#767676' vertical={false} />
        <XAxis 
          dataKey="name"
          axisLine={false}
          stroke='#DBDBDB'
          tickLine={false}
        />
        <YAxis axisLine={false} type="number" domain={[110, 140]} />
        <Tooltip
          content={customTooltip}
          contentStyle={{ backgroundColor: '#4A4A4A' }}
          position={{ x: 50, y: 290 }}          
        />
        <Legend
          verticalAlign='top'
          align='left'
          height={24}
          margin={{ left: 50, bottom: 50}}
        />
        {lineGraph}
      </LineChart>
    </ResponsiveContainer>
  )
}

FullSizeLineChart.propTypes = {
  seriesProps: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      tooltipName: PropTypes.string.isRequired,      
      lineColor: PropTypes.string.isRequired,      
    }),
  ),
  chartData: PropTypes.array.isRequired,
  xDataKey: PropTypes.string.isRequired,
  xTooltipName: PropTypes.string.isRequired,
}