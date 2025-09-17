import Image from 'next/image';
import React from 'react'
import Viewmore from '../../components/button/Viewmore'

type product={
    id:number;
    title:string;
    description:string;
    thumbnail:string;
    price:number;
}

const ProductList = async()=>{
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json()
    // console.log(data);
    const resin = await fetch("http://localhost:3000/api/products")
    if (!resin.ok) {
        console.log('object');
    }
    const dats = await resin.json()
    console.log(dats);
    return(
        <>
            {
                data.products.map((prod:product)=>(
                    // <>
                    <div key={prod.id}>
                        <Image width={200} height={200} src={prod.thumbnail} alt={prod.title}/>
                        <h1>{prod.title}</h1>
                        <Viewmore id={prod.id}/>
                    </div>
                    // </>
                ))
            }
        </>
    )
}

export default ProductList