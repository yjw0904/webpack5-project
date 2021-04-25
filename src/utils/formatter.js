import numbro from 'numbro'
import moment from 'moment'

export const formatNumberWholePercentage = (value) => {
  return numbro(value).format({
    output: 'percent',
    mantissa: 0,
  })
}

export const formatNumberNoDecimal = (value) => {
  return numbro(value).format({ thousandSeparated: true })
}

export const formatDateMMMDYYYY = (timeStamp) => {
  return moment(timeStamp, 'YYYY-MM-DDTHH:mm:ss').format('MMM D, YYYY')
}

export const formatDateMDD = (xData) => {
  return moment(xData, 'YYYY-MM-DDTHH:mm:ss').format('M/DD')
}
