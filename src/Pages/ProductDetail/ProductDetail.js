import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/Api'
import ProductCard from '../../components/Product/ProductCard'
import { FadeLoader } from 'react-spinners'

function ProductDetail() {
    const { productId } = useParams()
    const [product, setProduct] = useState()
    const [isLoading, setIsLoading] = useState(true) // Corrected to initialize as true

    useEffect(() => {
        axios.get(`${productUrl}/products/${productId}`)
            .then((res) => {
                setProduct(res.data)
                setIsLoading(false)
            }).catch((err) => {
                console.log(err)
                setIsLoading(false) // Move setIsLoading(false) inside the catch block
            })
    }, [productId]) // Added productId as a dependency

    return (
        <LayOut>
            {isLoading ? (<FadeLoader />) : (<ProductCard product={product} 
                flex={true}
                renderDesc={true}
                renderAdd={true}
            />)}
        </LayOut>
    )
}

export default ProductDetail
