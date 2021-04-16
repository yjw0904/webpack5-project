import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import "regenerator-runtime/runtime.js"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export const FullSizeLineChart = () => {    
  
  const chartData = useSelector((state) =>
    _.get(state.data.homePage, 'data', []),
  )  
  
  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart        
        data={chartData}
        fontSize={14}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke='#767676' vertical={false} />
        <XAxis 
          dataKey="name"
          axisLine={false}
          stroke='#DBDBDB'
          tickLine={false}
        />
        <YAxis axisLine={false} type="number" domain={[110, 140]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="IBM" stroke="#8884d8" />
        <Line type="monotone" dataKey="AAPL" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}

