import React from 'react'
import "./cards.css"
import { FaTruck } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { FaUndo } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";
const Card = () => {
  return (
    <div className='card'>
      <div className='truck'>
        <div className='cardtruck'>
<FaTruck style={{color:"red",fontSize:"35px",marginLeft:"150px"}} />

     <h3 style={{color:'black',marginLeft:"90px"}}>FREE SHIPPING</h3> 
<p style={{marginLeft:"60px"}}>Suffered Alteration in Some Form</p>
</div>
     
      </div>
    


      <div className='cach'>
      <CiMoneyBill style={{color:"red",fontSize:"40px",marginLeft:"150px"}} />
      <h3 style={{color:"black",marginLeft:"70px"}}>CACH ON DELIVERY</h3>
      <p style={{marginLeft:"60px"}}>The Internet Tend To Repeat</p>


      </div>
      <div className='return'>
      <FaUndo style={{color:"red",fontSize:"25px",marginLeft:"150px"}} />
      <h3 style={{color:"black",marginLeft:"90px"}}>45 DAYS RETURN</h3>
      <p style={{marginLeft:"60px"}}>Making it Look Like Readable</p>

      </div>
      <div className='open'>

      <LuClock9 style={{color:"red",fontSize:"25px", marginLeft:"150px"}} />
      <h3 style={{color:"black" ,marginLeft:"90px"}}>OPENING ALL WEEK</h3>
      <p style={{marginLeft:"130px"}}>AM - 09PM</p>
      </div>


    </div>
  )
}

export default Card