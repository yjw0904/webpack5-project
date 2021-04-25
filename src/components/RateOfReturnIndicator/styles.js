import { makeStyles } from '@material-ui/core/styles'
import { generatePaperStyles } from '../../styles/style_generators'
export const useStyles = makeStyles((theme) => ({
  paperContainer: generatePaperStyles(theme),
  textAlignment: {
    textAlign: 'left',
  },
}))
