import React from 'react'
import { Usequery } from '@/app/queries/query'
export default function ticket() {
    const {data}=Usequery()
  return (
    <div className='grid place-items-center'>
        {data?.map((item:any)=>{
return(
    <h1>{item.name}</h1>
)
    })}</div>
  )
}
