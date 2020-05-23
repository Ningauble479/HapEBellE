import React, { Component } from "react"
import SideDrawer from './Components/DeskNav/SideDrawer/SideDrawer'
import Backdrop from './Components/DeskNav/SideDrawer/Backdrop'
import { Grid } from '@material-ui/core'
import './App.scss';
import {Route} from 'react-router-dom'
import TopNavbar from './Components/TopNavbar'
import TopAdBar from './Components/TopAdBar'
import Nav from './Components/DeskNav/Nav'
import Navbar from './Components/Navbar/Navbar'
// import Nav from './Components/Nav'
import MobileNav from './Components/MobileNav/mobileNav'
import RecipeSearch from './strapiStructures/recipeSearcher'
import RecipeStructure from './strapiStructures/recipePage'
// import LandingPage from './Components/LandingPage'
// import BoxPage from './PageStructure/Boxes'

// function App() {
//   return (
//     <Grid container style={{width: '100%', height: '100%'}} wrap='nowrap' direction='column'>
//         <TopNavbar/>
//         <Route exact path='/' component={LandingPage}/>
//         <Route path='/recipes/:id' component={RecipeStructure}/>
//         <Route exact path='/recipes'>
//           <RecipeSearch/>
//         </Route>
//         <Route exact path='/boxes'>
//           <BoxPage/>
//         </Route>
//     </Grid>
//   );
// import LandingPage from './Components/LandingPage'
import HomePage from './pages/main/HomePage'



class App extends Component {


  render() {

    return (

      <div className="app">

        <Route exact path='/' component={HomePage} />
        <Route path='/recipes/:id' component={RecipeStructure} />
        <Route exact path='/recipes'>
          <RecipeSearch />
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