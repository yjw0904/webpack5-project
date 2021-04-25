import React from 'react'
import PropTypes from 'prop-types'
import round from 'lodash/round'
// Mui components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
//Mui icons
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { formatNumberWholePercentage } from '../../utils/formatter'
import { useStyles } from './styles'
/**
 * Percentage Change Indicator component
 */
export const PercentageChangeIndicator = ({ trendPercentage }) => {
  const classes = useStyles()
  const roundedPercentage = round(trendPercentage, 2)
  const isPositiveTrend = roundedPercentage > 0
  const isNegativeTrend = roundedPercentage < 0
  const isFlatTrend = roundedPercentage == 0
  const negativePercentage = roundedPercentage * -1
  return (
    <React.Fragment>
      {isFlatTrend && (
        <Grid container justify='flex-start'>
          <Grid item>
            <Typography variant='subtitle1'>
              {formatNumberWholePercentage(roundedPercentage)}
            </Typography>
          </Grid>
        </Grid>
      )}
      {isPositiveTrend && (
        <Grid container justify='flex-start' className={classes.alertTrendUp}>
          <Grid item>
            <ArrowDropUpIcon />
          </Grid>
          <Grid item>
            <Typography variant='subtitle1'>
              {formatNumberWholePercentage(roundedPercentage)} Up
            </Typography>
          </Grid>
        </Grid>
      )}
      {isNegativeTrend && (
        <Grid container justify='flex-start' className={classes.alertTrendDown}>
          <Grid item>
            <ArrowDropDownIcon />
          </Grid>
          <Grid item>
            <Typography variant='subtitle1'>
              {formatNumberWholePercentage(negativePercentage)} Down
            </Typography>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  )
}
PercentageChangeIndicator.propTypes = {
  trendPercentage: PropTypes.number.isRequired,
}