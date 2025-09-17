// import { useRouter } from 'next/navigation';
"use client"
import { useRouter } from 'next/navigation';
import React  from 'react'
const Viewmore =({id}:{ id: number})=>{
    // console.log(id);
    const router = useRouter()
    const viewmore = ()=>{
        router.push(`/Products/${id}`)
    }
    return(
        <>
            <button onClick={viewmore}>click me</button>
        </>
    )
}

export default Viewmore