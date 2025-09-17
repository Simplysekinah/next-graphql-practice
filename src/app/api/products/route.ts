import { NextResponse } from "next/server"

export function GET(request:Request){
    const products =[
        {name:'sekinat',branch:'uk',price:3000},
        {name:'sekinat',branch:'uk',price:3000},
    ]
    return NextResponse.json(products)
}