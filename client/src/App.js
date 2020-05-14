import React from 'react';
import { Grid } from '@material-ui/core'
import './App.css';
import {Route} from 'react-router-dom'
import TopNavbar from './Components/TopNavbar'

import RecipeSearch from './strapiStructures/recipeSearcher'
import RecipeStructure from './strapiStructures/recipePage'
import LandingPage from './Components/LandingPage'
import BoxPage from './PageStructure/Boxes'

function App() {
  return (
    <Grid container style={{width: '100%', height: '100%'}} wrap='nowrap' direction='column'>
        <TopNavbar/>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/recipes/:id' component={RecipeStructure}/>
        <Route exact path='/recipes'>
          <RecipeSearch/>
        </Route>
        <Route exact path='/boxes'>
          <BoxPage/>
        </Route>
    </Grid>
  );
}

export default App;
