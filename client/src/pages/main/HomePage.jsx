import React from 'react';
// import { Grid } from '@material-ui/core'
// // import './App.css';
// import {Route} from 'react-router-dom'
// import TopNavbar from './Components/TopNavbar'
// import TopAdBar from '../../Components/TopAdBar'
import HeroSection from '../main/HeroSection'
import ProductSection from '../main/productSection'
import '../../styles/HomePage.css'

function HomePage() {
  return (
    <div className="homeStyle">
<HeroSection />
<ProductSection />
    </div>
  );
}

export default HomePage;