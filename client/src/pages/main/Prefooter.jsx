import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Prefooter.css'
import bgImg from '../../Images/footerImg.png'
import { Route } from 'react-router-dom'






function Prefooter() {
    return (
        <div className='Prefooter__section'>
            <div className="prefooter">
                <div className='prefooter__info'>
                    <h1 className='prefooter__title'>High quality meat  From The farm to your home</h1>
                    <p className='prefooter__shortDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad provident accusantium mollitia hic non perferendis cum libero voluptatum omnis. <em>The last health program you'll ever need</em></p>
                    <button className='btn__med'><Link to='/login/sign-in' className='btn__med'>Members</Link></button>
                </div>
            </div>

            {/* <div className='footer__hero' style={{ backgroundImage: `url(${bgImg})` }} ></div> */}
            
        </div>


    );
}

export default Prefooter;