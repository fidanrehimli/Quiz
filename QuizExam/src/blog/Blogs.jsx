import React from 'react'
import "./blog.css"
const Blogs = () => {
  return (
    <div className='blog'>
        <h1 style={{marginLeft:"500px"}}>Latest Blogs</h1>
        <hr></hr>
        <div className='image'>
            <div  className='img' style={{backgroundImage:`url("https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg")`}}>
                <div className='boxes'>
                    <h1 style={{fontSize:"15px"}}>Here are the trends I see coming this fall </h1>
                    {/* <p>BY ADMIN | DEC 01, 2017</p> */}
                    {/* <button className="readbtn" style={{backgroundColor:"red",color:"white"}}>Read More</button> */}
                </div>
            </div>
            <div className='img' style={{backgroundImage:`url("https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg")`}}></div>
            <div  className="img"style={{backgroundImage:`url("https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg")`}}></div>
        </div>
    </div>
  )
}

export default Blogs