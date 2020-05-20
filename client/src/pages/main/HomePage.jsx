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
// import Grass from '../main/GrassSection'
import Process from '../main/ProcessSection'
import Footer from '../main/Footer'


import '../../styles/HomePage.css'

function HomePage() {
  return (
    <div className="homeStyle">
      <section className="top-section">
        <TopAdBar />
        <MobileNav />
        <Navbar />
      </section>


      <section className="section-one">
        <HeroSection />
      </section>

      <section className="between-section">
      {/* <Precard /> */}
      </section>

      <section className="section-two">
        <ProductSection />
      </section>

      <section className="section-three">
        <Process />
      </section>

      <section className="section-footer">
        <Footer />
      </section>

    </div>
  );
}

export default HomePage;