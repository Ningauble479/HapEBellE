import React from 'react';
// import { Grid } from '@material-ui/core'
// // import './App.css';
// import {Route} from 'react-router-dom'
// import TopNavbar from './Components/TopNavbar'
// import TopAdBar from '../../Components/TopAdBar'
import HeroSection from '../main/HeroSection'
import ProductSection from '../main/productSection'
import TopAdBar from '../../Components/TopAdBar'
import Navbar from '../../Components/Navbar/Navbar'
import MobileNav from '../../Components/MobileNav/mobileNav'
import Precard from '../main/PrecardSection'

import '../../styles/HomePage.css'

function HomePage() {
  return (
    <div className="homeStyle">
      <TopAdBar />
      <MobileNav />
      <Navbar />
      <HeroSection />
      <ProductSection />
      <Precard />
    </div>
  );
}

export default HomePage;