import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { useActionData } from "react-router-dom";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
 

 const [loading,setLoading]=useState(true);
 const [products,setProducts]=useState([]);


 async function fetchProductData(){

  setLoading(true);
  try {

    const output=await fetch(API_URL);
    const data=await output.json();
    setProducts(data)
    console.log(data)
    
  } catch (error) {
    console.log(error);
setProducts([])
    
  }
  setLoading(false)
 }

 useEffect(()=> {
  fetchProductData()
 },[])
 

 

 
 
 

  return (
   
   <div>

    {
      loading ? (<Spinner />) : (
        products.length >0 ? (<div className="grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl space-y-10 space-x-5 mx-auto min-h-[80vh] ">
          {
            products.map((product)=> (
              <Product key={product.id} product={product}/>
            ))
          }
        </div>):(<div className="text-2xl flex items-center justify-center">No product found</div>)
      )
    }

   </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  );
};

export default Home;
