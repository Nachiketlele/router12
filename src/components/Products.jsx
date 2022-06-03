import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const [value,setValue] = useState([])
    useEffect(()=>{
        const getData = async () =>{
             let res = await fetch("http://localhost:8080/products")
             let data = await res.json()
             setValue(data)
             console.log(data)
        }
        getData()
    },[])
  return (
    <div>Products
        <div>
            {value.map((e)=>(
            <div key={e.id} >
              <Link to={`/products/${e.id}`} >{e.name} </Link> 
              {/*<Link to={`/products/${e.price}`}>{e.price}</Link>*/}
            </div>
        ))}
        </div>
    </div>
  )
}

export default Products