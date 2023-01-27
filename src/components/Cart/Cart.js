import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart,getRandomItem}=props;
   
    // console.log(cart);
 
    return (
        <div className='cart'>
            <h2>Choosing Items</h2>
            <p>Selected Items:{cart.length}</p>

            {cart.map(item => <h5 key={item.id}> {item.name}</h5>)}

            <button onClick={()=>getRandomItem(cart)} className='random-number'>Select A random Item</button>
            <button className='random-number'>Select Again</button>
        </div>
    );
};

export default Cart;