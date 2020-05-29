import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/HeaderCarousel.css'
// import bgImg from '../../Images/heroImg.png'
import { Route } from 'react-router-dom'
import TopProductBox from './topProductBox'



function HeaderCarousel() {
    return (
        <div className='header-carousel-section'>
            <div className="carousel-background">background
                <div className="carousel-strip">
                    <div className="carousel-boxes">
                        {/* <div className="carousel-test"></div> */}
                            <div className="fakeButton carousel-box"><TopProductBox topBox={1}/></div>
                            <div className="fakeButton carousel-box box-2"><TopProductBox topBox={2}/></div>
                            <div className="fakeButton carousel-box"><TopProductBox topBox={3}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderCarousel;