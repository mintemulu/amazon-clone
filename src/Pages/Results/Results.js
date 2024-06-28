import React, { useEffect, useState } from 'react';
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/Api';
import ProductCard from '../../components/Product/ProductCard';
import './Results.css';
import { FadeLoader } from 'react-spinners';

function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const url = `${productUrl}/products/category/${categoryName}`;
    console.log('Request URL:', url);

    axios.get(url)
      .then((res) => {
        console.log('API response:', res.data);
        setResults(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('API error:', err);
        setError(err);
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
    {
      loading?(<FadeLoader />):(<section>
        <h1 style={{ padding: '30px' }}>Results</h1>
        <p style={{ padding: '30px' }}>Category/{categoryName}</p>
        <hr />
        <div className='product-container'>
          {loading && <p>Loading...</p>}
          {error && <p>Error loading data: {error.message}</p>}
          {results.length > 0 ? (
            results.map((product) => (
              <ProductCard key={product.id} product={product} renderAdd={true}/>
            ))
          ) : (
            !loading && !error && <p>No products found for this category.</p>
          )}
        </div>
      </section>)
      
    }
      
    </LayOut>
  );
}

export default Results;
