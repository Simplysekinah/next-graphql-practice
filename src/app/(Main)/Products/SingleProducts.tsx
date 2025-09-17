import React from 'react'
import Image from 'next/image';

const SingleProducts = async ({ info }: { info: string }) => {
    const res = await fetch(`https://dummyjson.com/products/${info}`);
    const data = await res.json()
    // console.log(data);
    return (
        <>
            <Image width={200} height={200} src={data.thumbnail} alt={data.title} />
            <h1>{data.title}</h1>
            <h1>{data.description}</h1>
            <h1>{data.price}</h1>
        </>
    )
}

export default SingleProducts