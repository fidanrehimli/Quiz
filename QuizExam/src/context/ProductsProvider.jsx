import { createContext, useState } from "react";

export const ProductsContext=createContext();

export const ProductsProvider = ({children})=>{
    const [data,setData]=useState([])
    const [sortData,setSortData] = useState([])


    return(
        <ProductsContext.Provider 
        value={{data,setData,sortData,setSortData}} 
        > 
{children}
        </ProductsContext.Provider>
    )
}