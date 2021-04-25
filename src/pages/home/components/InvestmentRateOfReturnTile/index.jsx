import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'
// Mui components
import Grid from '@material-ui/core/Grid'
import { StockAreaChart } from '../../../../components/StockAreaChart'
import { formatDateMDD } from '../../../../utils/formatter'
import { RateOfReturnIndicator } from '../../../../components/RateOfReturnIndicator'
/**
 * Open Network Connections Tile
 */
export const InvestmentRateOfReturnTile = () => {
  const currentInvestmentBalance = useSelector((state) =>
    _.get(state.data.homePage, 'balance.currentBalance', 0),
  )  
  
  const rateOfReturnPercentage = useSelector((state) =>
    _.get(
      state.data.homePage,
      'balance.rateOfReturn',
      0.10
    ),
  )
  
  const balanceAsOfDate = useSelector((state) =>
    _.get(state.data.homePage, 'balance.asOfDate', '1900-01-01'),
  )
  
  const investmentAccountBalanceChartData = useSelector((state) =>
    _.get(state.data.homePage, 'balance.history', []),
  )
  
  const SERIES_PROPS = [
    {
      dataKey: 'balance',
      tooltipName: 'Balance',
      gradientColor: '#645a9d',
      lineColor: '#cbcae5',
    },
  ]
  return (
    <Grid container>
      <Grid item xs={12} sm={3} md={3} lg={3}>
        <RateOfReturnIndicator          
          value={currentInvestmentBalance}
          name='Current balance'          
          percentage={rateOfReturnPercentage}
          lastUpdateDate={balanceAsOfDate}
        />
      </Grid>
      <Grid item xs={12} sm={9} md={9} lg={9}>
        <StockAreaChart
          seriesProps={SERIES_PROPS}
          data={investmentAccountBalanceChartData}
          xDataKey='date'
          formatDateMDD={formatDateMDD}
          xTooltipName='Date'
        />
      </Grid>
    </Grid>
  )
}