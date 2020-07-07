import React, { Component } from "react"
import SideDrawer from './Components/DeskNav/SideDrawer/SideDrawer'
import Backdrop from './Components/DeskNav/SideDrawer/Backdrop'
import { Grid } from '@material-ui/core'
import './App.scss';
import {Route, Redirect} from 'react-router-dom'
import TopAdBar from './Components/TopAdBar'
import Nav from './Components/DeskNav/Nav'
import Navbar from './Components/Navbar/Navbar'
// import Nav from './Components/Nav'
import MobileNav from './Components/MobileNav/mobileNav'
import RecipeSearch from './strapiStructures/recipeSearcher'
import RecipeStructure from './strapiStructures/recipePage'
import BoxPageMain from './pages/Boxes/index'
// import LandingPage from './Components/LandingPage'
// import BoxPage from './PageStructure/Boxes'
import HomePage from './pages/main/HomePage'
import StorePage from './pages/StorePage/index'
import CheckoutSuccess from './pages/checkoutSuccess/index'



class App extends Component {


  render() {

    return (

      <div className="app">
        <section className="top-section">
          <TopAdBar />
          <MobileNav />
          <Navbar />
        </section>

        <Route exact path='/' component={HomePage} />
        <Route path='/recipes/:id' component={RecipeStructure} />
        <Route exact path='/recipes'>
          <RecipeSearch />
        </Route>
        <Route path='/boxes/:id'>
          <BoxPageMain/>
        </Route>
        <Route path='/shop'>
          <Redirect to='/shop/smallBoxes'/>
        </Route>
        <Route path='/shop/:size'>
          <StorePage/>
        </Route>
        <Route path='/success/:id'>
          <CheckoutSuccess/>
        </Route>

      </div>

    );
  }
}

export default App;



//<Grid container style={{width: '100%', height: '100%'}} wrap='nowrap' direction='column'>
//{/* <TopAdBar />
//<MobileNav />
//<Navbar /> */}
//
//{/* <Route exact path='/' component={LandingPage}/> */}
//        <TopNavbar />
//        <Route exact path component={HomePage}/>
//        <Route path='/recipes/:id' component={RecipeStructure}/>
//        <Route exact path='/recipes'>
//          <RecipeSearch/>
//        </Route>
//        <Route exact path='/boxes'>
//          {/* <BoxPage/> */}
//        </Route>
//</Grid>