import React from 'react'
import "./letter.css"
const Letter = () => {
  return (
    <div className='letter'>
        <div className='leftletter'>
        <h2 style={{color:"black"}}>Newsletter</h2>
        <p style={{color:"grey"}}>Subscribe to our newsletter and get 20% off your first purchase</p>
        </div>
        <div className='rightletter'>
            <input className='inp' placeholder='Your Email' />
            <button className='subbtn'>SUBSCRIBE</button>
        </div>

    </div>
  )
}

export default Letter