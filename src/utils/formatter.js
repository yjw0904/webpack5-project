import numbro from 'numbro'

export const formatNumberWholePercentage = (value) => {
  return numbro(value).format({
    output: 'percent',
    mantissa: 0,
  })
}
