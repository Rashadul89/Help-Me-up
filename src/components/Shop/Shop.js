import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop..css'

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
   
    },[])
    return (
        <div className="main"> 
        <h1>Help Me Up</h1>
        <h2>Find 4 ME</h2>
        <div className='shop-container'>
            <div className="product-container">
             {
                products.map(product=><Products 
                    key={product.id} 
                    product={product} >
                        
                    </Products>)
             }
            </div>
            <div className="cart-container">
            <h3>Select For Me</h3>
           </div>
        </div>
        </div>
    );
};

export default Shop;