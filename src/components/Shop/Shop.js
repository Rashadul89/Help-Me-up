import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop..css'

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    const [random,setRandom]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data)) 
    },[])
    const handleAddtoCart=(product)=>{
        // console.log(product);
       const newCart=[...cart,product];
       setCart(newCart);
    }
    const getRandomItem=(cart)=>{
        // console.log(product);
       const randomItem = myRandomMethod(cart);
       console.log(randomItem);
       //setRandom(randomItem);
    }
    
    const myRandomMethod = (set)=>{
        let items = Array.from(set);
        return items[Math.floor(Math.random() * items.length)];
    }
   
    return (
        <div className="main"> 
        <h1>Help Me Up</h1>
        <h2>Find 4 ME</h2>
        <div className='shop-container'>
            <div className="product-container">
             {
                products.map(product=><Products 
                    key={product.id} 
                    product={product} 
                    handleAddtoCart={handleAddtoCart}>
                    </Products>)
             }
            </div>
            <div className="cart-container">
            <Cart cart={cart} random={getRandomItem}></Cart>
           </div>
        </div>
        </div>
    );
};

export default Shop;