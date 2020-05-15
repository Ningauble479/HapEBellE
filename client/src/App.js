import React, { Component } from "react"
import SideDrawer from './Components/DeskNav/SideDrawer/SideDrawer'
import Backdrop from './Components/DeskNav/SideDrawer/Backdrop'
import { Grid } from '@material-ui/core'
import './App.css';
import { Route } from 'react-router-dom'
import RecipeSearch from './strapiStructures/recipeSearcher'
import RecipeStructure from './strapiStructures/recipePage'
// import LandingPage from './Components/LandingPage'
import HomePage from './pages/main/HomePage'



class App extends Component {


  render() {

    return (
<div className="app">
      {/* <Grid container style={{ width: '100%', height: '100%' }} wrap='nowrap' direction='column'> */}
        <Route exact path='/' component={HomePage} />
        <Route path='/recipes/:id' component={RecipeStructure} />
        <Route exact path='/recipes'>
          <RecipeSearch />
        </Route>
      {/* </Grid> */}
      </div>
    );
  }
}

export default App;
