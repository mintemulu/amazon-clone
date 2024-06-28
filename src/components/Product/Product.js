import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import "./Product.css"
import { FadeLoader } from 'react-spinners';

function Product() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true) // Corrected to initialize as true

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false); // Move setIsLoading(false) inside the catch block
            });
    }, []);

    return (
        <>
            {
                isLoading ? (<FadeLoader />) : (
                    <section className='product-container'>
                        {products.map((singleProduct) => (
                            <ProductCard key={singleProduct.id} product={singleProduct} renderAdd={true}/>
                        ))}
                    </section>
                )
            }
        </>
    );
}

export default Product;
