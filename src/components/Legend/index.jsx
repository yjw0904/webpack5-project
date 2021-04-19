import React from 'react'
import PropTypes from 'prop-types'
// Mui components
import Grid from '@material-ui/core/Grid'
import StopIcon from '@material-ui/icons/Stop'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import { Typography } from '@material-ui/core'
import { formatNumberWholePercentage } from '../../utils/formatter'
/**
 * Legend component
 * @param props - refer to the prop types below
 */
export const Legend = ({
  chartData,
  chartColor,
  valueNameField,
  valueField = 'value',
}) => {
  return (
    <Table size='small'>
      <TableBody>
        {chartData.map((dataPoint, index) => (
          <TableRow key={`wifi-encryption-${index}`}>
            <TableCell>
              <Grid container>
                <Grid item>
                  <StopIcon
                    fontSize='default'
                    style={{ color: chartColor[index] }}
                  />
                </Grid>
                <Grid item>
                  <Typography>{dataPoint[valueNameField]}</Typography>
                </Grid>
              </Grid>
            </TableCell>
            <TableCell align='right'>
              {formatNumberWholePercentage(dataPoint[valueField])}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
Legend.propTypes = {
  chartData: PropTypes.array.isRequired,
  chartColor: PropTypes.array.isRequired,
  valueNameField: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
}