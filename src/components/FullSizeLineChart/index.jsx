import React from 'react'
import "regenerator-runtime/runtime.js"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: '2021-03-26',
    IBM: 136.38,
    AAPL: 121.21,
    AMZN: 618.71,
  },
  {
    name: '2021-03-25',
    IBM: 133.07,
    AAPL: 120.59,
    AMZN: 640.39,
  },
  {
    name: '2021-03-24',
    IBM: 130.62,
    AAPL: 120.09,
    AMZN: 630.27,
  },
  {
    name: '2021-03-23',
    IBM: 130.46,
    AAPL: 122.54,
    AMZN: 662.160,
  },
  {
    name: '2021-03-22',
    IBM: 130.55,
    AAPL: 123.39,
    AMZN: 670.00,
  },
  {
    name: '2021-03-19',
    IBM: 128.90,
    AAPL: 119.99,
    amt: 2500,
  },
  {
    name: '2021-03-18',
    IBM: 130.06,
    AAPL: 120.53,
    AMZN: 654.87,
  },
];

export const FullSizeLineChart = () => {  
  
  const fetchData = async () => {
    const requestOption = {
      method: "GET",
      redirect: "follow"
    }

    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=PXZ3MEP7FYF4WULC`

    try {
      const response = await fetch(apiUrl, requestOption);
      return response.ok ? response.text() : null
    }
    catch (err) {
      console.log(err)
      return null
    }
  }

  const stockData = async () => {
    let apiValue = await fetchData()
    console.log(JSON.parse(apiValue))    
  }

  stockData()

  
  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart        
        data={data}
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

