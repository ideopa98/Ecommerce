import React from 'react';
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, image, title, price, rating}) => {
   const [{basket}, dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,

        })
    }
    return (
        <div className='checkoutProduct'>
            <img classname="checkoutProduct__image" src={image} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProdcut__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct __rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) =>
                            <p>⭐</p>
                        )}
                </div>
                <button onClick={removeFromBasket}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
