import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Mui components
import Container from '@material-ui/core/Container'
// Components
import { HomePage } from './Home'

export const MainPage = () => {  
  return (
    <Router>      
      <Container component='main-page' data-testid='main-page'>        
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>          
        </Switch>
      </Container>
    </Router>
  )
}