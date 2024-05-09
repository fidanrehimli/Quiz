import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./sellers.css"
const Sellers = () => {
    const [data,setData] =useState([])
    const [sortData,setSortData] = useState([])

    const getAllData=async()=>{
        let res = await axios("http://localhost:3000/products");
setData(res?.data)
setSortData(res?.data)
    }
    useEffect(()=>{
        getAllData()
    },[])
  return (
    <div className='seller'>
        <div>
            <h1 style={{marginLeft:"500px"}}>Best Sellers</h1>
            <hr></hr>
        </div>
        <div className='mainbox'>
        <div className='row'>
            {data.slice(0,5).map((item)=>(
                <div className='box' key={item.id} >
                     <img src={item.img} />
              <p className='title'>{item.title}</p>
              <p className='price'>${item.price}</p>
                </div>
            ))}
            </div>

        </div>

    </div>
  )
}

export default Sellers