import _ from 'lodash'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Area,
  ResponsiveContainer,
  AreaChart,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
// Mui components
import Grid from '@material-ui/core/Grid'
/**
 * Area Full Chart component
 */
export const StockAreaChart = ({
  seriesProps,
  data,
  xDataKey,
  formatDateMDD,
  xTooltipName,
}) => {
  const chartData = []
  seriesProps.forEach((series) => {
    const dataKey = series.dataKey
    _.forEach(data, (dataPoint, index) => {
      _.set(chartData, `${index}.${dataKey}`, [0, dataPoint[dataKey]])
    })
  })
  _.forEach(data, (dataPoint, index) => {
    const xData = _.isFunction(formatDateMDD)
      ? formatDateMDD(dataPoint[xDataKey])
      : dataPoint[xDataKey]
    _.set(chartData, `${index}.${xDataKey}`, xData)
  })
  const linearGrad = seriesProps.map((series, index) => {
    return (
      <linearGradient
        key={`series-${index}`}
        id={`series-${index}`}
        x1='0'
        y1='0'
        x2='0'
        y2='1'
      >
        <stop offset='5%' stopColor={series.gradientColor} stopOpacity={0.8} />
        <stop offset='95%' stopColor={series.lineColor} stopOpacity={0} />
      </linearGradient>
    )
  })
  const areaGraph = seriesProps.map((series, index) => {
    return (
      <Area
        key={series.dataKey}
        name={series.tooltipName}
        type='monotone'
        dataKey={series.dataKey}
        fillOpacity={1}
        stroke={series.lineColor}
        activeDot={{ r: 8 }}
        fill={`url(#${`series-${index}`})`}
      />
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
        data,
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
    <Grid item xs={12} md={12} lg={12}>
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart
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
          <defs>{linearGrad}</defs>
          <CartesianGrid stroke='#767676' vertical={false} />
          <XAxis
            axisLine={false}
            dataKey={xDataKey}
            stroke='#DBDBDB'
            tickLine={false}
          />
          <YAxis type="number" domain={[10000, 'auto']} />
          <Tooltip
            content={customTooltip}
            contentStyle={{ backgroundColor: '#4A4A4A' }}
            position={{ x: 0, y: 290 }}
          />
          <Legend
            verticalAlign='top'
            align='left'
            height={36}
            margin={{ left: 50 }}
          />
          {areaGraph}
        </AreaChart>
      </ResponsiveContainer>
    </Grid>
  )
}
StockAreaChart.propTypes = {
  seriesProps: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      gradientColor: PropTypes.string.isRequired,
      lineColor: PropTypes.string.isRequired,
      tooltipName: PropTypes.string.isRequired,
    }),
  ),
  data: PropTypes.array.isRequired,
  xDataKey: PropTypes.string.isRequired,
  formatDateMDD: PropTypes.func,
  xTooltipName: PropTypes.string.isRequired,
}