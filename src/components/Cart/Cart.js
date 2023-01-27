import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    let randomItem = {};

    const handleRandom = ()=>{
        randomItem = getRandomItem(cart);
        console.log(randomItem);
    }

    const getRandomItem = (cart)=>{
        let items = Array.from(cart);
        return items[Math.floor(Math.random() * items.length)];
    }
 
    return (
        <div className='cart'>
            <h2>Choosing Items</h2>
            <p>Selected Items:{cart.length}</p>

            {cart.map(item => <h5 key={item.id}> {item.name}</h5>)}

            <button onClick={()=>handleRandom(cart)} className='random-number'>Select A random Item</button>
            <button className='random-number'>Select Again</button>

            <div className='random-item'>
                <h2>Random Item</h2>
                {randomItem?.name}
            </div>
        </div>
    );
};

export default Cart;