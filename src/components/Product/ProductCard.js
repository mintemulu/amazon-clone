import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../currencyFormat/currencyFormat'; 
import './Product.css';
import { Type } from '../../Utility/action.type';
import { DataContext } from '../DataProvider/DataProvider';

function ProductCard({ product, flex, renderDesc,renderAdd }) {
  const [state, dispatch] = useContext(DataContext);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { image, title, id, rating, price, description } = product;
  const flexClass = flex ? 'product-flex' : '';
  console.log(state);
 

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image, title, id, rating, price, description,
      },
    });
  };

  return (
    <div className={`product-card ${flexClass}`}>
      <a href={`/product/${id}`} className="product-image-link">
        <img src={image} alt={title} className="product-image" />
      </a>
      <div className="product-info">
        <h3>{title}</h3>
        {renderDesc && <div style={{ minWidth: '250px' }}>{description}</div>}
        <div className="rating">
          {rating ? (
            <>
              <Rating value={rating.rate} precision={0.1} readOnly />
              <small>{rating.count}</small>
            </>
          ) : (
            <p>No rating available</p>
          )}
        </div>
        <div className="price">
          <CurrencyFormat amount={price} />
        </div>
        {
          renderAdd && <button className="add-to-cart" onClick={addToCart}>Add to cart</button>
        }
      </div>
    </div>
  );
}

export default ProductCard;
