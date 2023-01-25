import React from 'react';
import'./Products.css'

const Products = (props) => {
    console.log(props.product)
    const{id,balance,picture,name}=props.product;
    return (
        <div className='product'> 
            <img src={picture} alt="" />
            <h4>{id}</h4> 
            <h5>{name}</h5> 
            <h5>{balance}</h5> 
            <button   className='btn-cart'>
           <p>Add To Cart  </p></button>


        </div>
    );
};

export default Products;