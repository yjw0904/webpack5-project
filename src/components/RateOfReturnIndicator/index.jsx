import React from 'react'
import PropTypes from 'prop-types'
// Mui components
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { PercentageChangeIndicator } from '../PercentageChangeIndicator'
import {
  formatDateMMMDYYYY,
  formatNumberNoDecimal,
} from '../../utils/formatter'
import { useStyles } from './styles'
/**
 * General Statistic component
 */
export const RateOfReturnIndicator = ({ value, name, percentage, lastUpdateDate }) => {
  const classes = useStyles()
  return (
    <Container>
      <Typography variant='h4' className={classes.textAlignment}>
        {formatNumberNoDecimal(value)}
      </Typography>
      <PercentageChangeIndicator trendPercentage={percentage} />
      <Typography variant='subtitle2' className={classes.textAlignment}>
        {name}
        {' as of '}
        {formatDateMMMDYYYY(lastUpdateDate)}
      </Typography>
    </Container>
  )
}
RateOfReturnIndicator.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  lastUpdateDate: PropTypes.string,
}