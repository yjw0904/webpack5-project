import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
// Mui components
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
// Components
import { useStyles } from './styles'
/**
 * Generic tile component
 */
export const Tile = ({ children, title }) => {
  const classes = useStyles()
  const dataIsLoading = useSelector((state) => state.app.dataIsLoading)
  return (
    <Paper className={classes.paperContainer}>
      {title && (
        <Container disableGutters className={classes.titleContainer}>
          <Typography variant='h6' component='h6'>
            {title}
          </Typography>
        </Container>
      )}
      {dataIsLoading ? (
        <Grid container className={classes.circularProgress} align='center'>
          <Grid item xs={12}>
            <CircularProgress
              size={90}
              color='primary'
              className={classes.circularProgress}
            />
          </Grid>
        </Grid>
      ) : (
        <Container disableGutters>{children}</Container>
      )}
    </Paper>
  )
}
Tile.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
}