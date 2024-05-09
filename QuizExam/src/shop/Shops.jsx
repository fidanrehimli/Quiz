import React, { useContext, useEffect } from "react";
import "./shop.css";
import axios from "axios";
import { ProductsContext } from "../context/ProductsProvider";
const Shops = () => {
  const { data, setData, sortData, setSortData } = useContext(ProductsContext);
  const getAllData = async () => {
    const res = await axios("http://localhost:3000/products");
    setData(res?.data);
    setSortData(res?.data);
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="shop">
      <div>
        <h1>New Arrivals</h1>
        <hr style={{ color: "red" }}></hr>
     <input className="searchinp" type="text" placeholder="Title search..." onChange={(e)=>{
      let search=data.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
      setSortData(search)
     }}/>
      </div>
      <div className="buttons">
        <button className="allbtn" onClick={() => getAllData()}>
          ALL
        </button>
        <button
          onClick={() => {
            let newarr = [...data].sort((a, b) => a.price - b.price);
            setData(newarr);
          }}
        >
          PRICE
        </button>
        <button
          onClick={() => {
            let newarr = [...data].sort((a, b) =>
              a.title[0].localeCompare(b.title[0])
            );
            setData(newarr);
          }}
        >
          TITLE
        </button>
        <button>MEN'S</button>
      </div>
      <div className="mainbox">
        <div className="row">
          {sortData.slice(0, 5).map((item) => (
            <div className="box" key={item.id}>
              <img src={item.img} />
              <p className="title">{item.title}</p>
              <p className="price">${item.price}</p>
              <button
                className="addbtn"
                style={{ backgroundColor: "red", color: "white" }}
              >
                Add to Card
              </button>
            </div>
          ))}
        </div>
        <div className="row">
          {sortData.slice(5).map((item) => (
            <div className="box" key={item.id}>
              <img src={item.img} />
              <p className="title">{item.title}</p>
              <p className="price">${item.price}</p>
              <button
                className="addbtn"
                style={{ backgroundColor: "red", color: "white" }}
              >
                Add to Card
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shops;
