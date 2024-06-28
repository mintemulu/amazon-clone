import React, { useContext } from 'react';
import LayOut from '../../components/LayOut/LayOut';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from '../../components/currencyFormat/currencyFormat';
import { Link } from 'react-router-dom';
import "./Cart.css";
import { Type } from '../../Utility/action.type';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  };

  const decrement = (itemId) => {
    dispatch({
      type:Type.REMOVE_FROM_BASKET,
      id:itemId
    })
  };

  return (
    <LayOut>
      <section className='container'>
        <div className='cart-container'>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {
            basket?.length === 0 ? (
              <p>!!opps No item in your cart</p>
            ) : (
              basket.map((item, i) => (
                <section className='cart_product' 
                   >
                  <ProductCard
                     key={i}
                    product={item}
                    renderDesc={true}
                    flex={true}
                    renderAdd={false}
                  />
                  <div className='button_container'>
                    <button className='btn' onClick={() => increment(item)}><IoIosArrowUp size={20}/></button>
                    <span>{item.amount}</span>
                    <button className='btn'onClick={() => decrement(item.id)}><IoIosArrowDown size={20} /></button>
                  </div>
                </section>
              ))
            )
          }
        </div>
        {basket?.length !== 0 && (
          <div className='subtotal'>
            <div>
              <p>subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type='checkbox' className='checkbox' />
              <small>This order contains a gift</small>
            </span>
            <Link to="/Payment">Continue to Checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
