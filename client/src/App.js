import React, { Component } from "react"
import SideDrawer from './Components/DeskNav/SideDrawer/SideDrawer'
import Backdrop from './Components/DeskNav/SideDrawer/Backdrop'
import { Grid } from '@material-ui/core'
import './App.css';
import {Route} from 'react-router-dom'
// import TopNavbar from './Components/TopNavbar'
import TopAdBar from './Components/TopAdBar'
import Nav from './Components/DeskNav/Nav'
import Navbar from './Components/Navbar/Navbar'
// import Nav from './Components/Nav'
import MobileNav from './Components/MobileNav/mobileNav'
import RecipeSearch from './strapiStructures/recipeSearcher'
import RecipeStructure from './strapiStructures/recipePage'
// import LandingPage from './Components/LandingPage'
import HomePage from './pages/main/HomePage'



class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (

<Grid container style={{width: '100%', height: '100%'}} wrap='nowrap' direction='column'>
<TopAdBar />
<MobileNav />
<Navbar />
{/* <Nav drawerClickHandler={this.drawerToggleClickHandler} />
<SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop} */}
  <Route exact path='/' component={HomePage}/>
  {/* <Route exact path='/' component={LandingPage}/> */}
  <Route path='/recipes/:id' component={RecipeStructure}/>
  <Route exact path='/recipes'>
    <RecipeSearch/>
  </Route>
</Grid>
    );
  }
}

export default App;
