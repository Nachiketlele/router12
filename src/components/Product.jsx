import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
 const { id } = useParams()
const [datas,setData] = useState([])
useEffect(()=>{
    fetch(`http://localhost:8080/products/${id}`)
    .then((res)=>res.json())
    .then((data)=>setData(data))
},[id])
  return (
    <div>Product {id} 
    <div>{datas.name}</div>
    </div>
  )
}

export default Product