import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import { useStyles } from './styles'

export const Tile = ({ children, title }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paperContainer}>
      {title && (
        <Container disableGutters className={classes.titleContainer}>
          <Typography variant='h6' component='h6'>
            {title}
          </Typography>
        </Container>
      )}
      <Container disableGutters>{children}</Container>
    </Paper>    
  )  
}

Tile.propTypes = {
  title: PropTypes.string,  
  children: PropTypes.element,
}