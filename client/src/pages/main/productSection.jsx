import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/ProductSection.css'
import bgImg from '../../Images/heroImg.png'
import { Route } from 'react-router-dom'




function ProductSection() {
  return (
    <div className='product-main'>
      {/* <div className="product-page-header">
        <h1>Choose your Perfect Meat box </h1>
        <h3>3 different box categories - Each with different box options to keep your belly full and wallet fat</h3>
      </div> */}

      <div className="svg__one">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.008487211650798798 640.0048917263421 396.711093784819"><path fill="#49515E" fill-opacity="1" d="M347.17 142.73C479.62 226.9 639.97 124.77 639.99 129.78C640 136.99 640.01 178.37 640 253.92C513.67 326.66 434.71 372.11 403.13 390.3C385.7 400.33 363.86 398.44 348.41 385.56C310.45 353.91 250.49 303.91 219.58 278.13C180.57 245.61 130.21 229.99 79.64 234.74C69.02 235.73 42.48 238.23 0 242.22C0 113.51 0 33.06 0 0.89C0 0.3 0.56 -0.13 1.13 0.02C143.8 39.23 259.15 86.79 347.17 142.73Z"></path></svg>
      </div>
       
      <div className="card-one">
        <div className="thecard">
          <div className="thefront">Front of the card </div>
          <div className="theback">Back of the card</div>
        </div>
      </div>

      <div className="card-two">
      <div className="thecard">
          <div className="thefront">Front of the card </div>
          <div className="theback">Back of the card</div>
        </div>
      </div>
      
      <div className="card-three">
      <div className="thecard">
          <div className="thefront">Front of the card </div>
          <div className="theback">Back of the card</div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;