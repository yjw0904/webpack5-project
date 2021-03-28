/**
 * Generate paper component styles
 * @param {Object} theme  
 */

export const generatePaperStyles = (theme) =>{
  return {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),    
  }
}