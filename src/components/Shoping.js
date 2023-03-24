import React from 'react'
import Navbar from "./Navbar";
import './About.css'

const Shoping = (props) => {
  return (
    <div className='flex shopping-card'>
      <div onClick={() => props.handleShow(true)}> Cart
        <sup> {props.count} </sup>
      </div><Navbar />
    </div>
  );
}

export default Shoping