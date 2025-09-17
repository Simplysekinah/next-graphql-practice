import React from 'react'
import SingleProducts from '../SingleProducts'
type prodinfo = {
    params:{
        id: string
    }
}
const ProductId = async({params}:prodinfo)=>{
    // console.log(params);
    return(
        <>
            <div>Products on {await params.id}</div>
            <SingleProducts info={params.id}/>
        </>
    )
}
export default ProductId