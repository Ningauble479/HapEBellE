import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Featured.css'
import bgImg from '../../Images/heroImg.png'
import {Route} from 'react-router-dom'




function HeroSection () {
    return (
  <div  className='header__section'>
  <div className='header__hero' style={{backgroundImage: `url(${bgImg})`}} ></div>
  <div className='header__content'>
    <div className='header__info'>
      <h1 className='header__title'>High quality meat  From The farm to your home</h1>
      {/* <p className='header__subtitle'>The Future of Healthcare</p> */}
      <p className='header__shortDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad provident accusantium mollitia hic non perferendis cum libero voluptatum omnis. <em>The last health program you'll ever need</em></p>
      <button className='btn__med'><Link to='/login/sign-in' className='btn__med'>Members</Link></button>

    </div>
  </div>
</div>
);
}

 export default HeroSection;