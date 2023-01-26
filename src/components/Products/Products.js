import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import'./Products.css'

const Products = (props) => {
    const {product,handleAddtoCart}=props;
    const{id,balance,picture,name}=props.product;

  
    return (
        <div className='product'> 
            <img src={picture} alt="" />
            <h4>{id}</h4> 
            <h5>{name}</h5> 
            <h5>{balance}</h5> 
            <button onClick={()=>handleAddtoCart(product.id)} className='btn-cart'>
           <p>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </p></button>
        </div>
    );
};
export default Products;