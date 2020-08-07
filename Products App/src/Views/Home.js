import React from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequest'


function Home(){
    const url = `https://raw.githubusercontent.com/igrikRS/React/master/Products%20App/src/Product/productso`
    
    let products = useAxiosGet(url)

    let content = null

    if(products.error){
        content = <p>
        Something is wrong!
        Please, refresh page or try against later.</p>
    }

    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
        content = 
        products.data.map((product) => 
            <div key = {product.id}>
                <ProductCard 
                   product={product} 
                />
            </div> 
        )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">
                Best Sellers
            </h1>
            {content}
        </div>
    )
}

export default Home