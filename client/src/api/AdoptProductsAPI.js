import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AdoptProductsAPI = () => {
    const [products, setProducts] = useState([])

    const getProducts = async ()=>{
        const res = await axios.get('/adopt')
        console.log(res)
    }

    useEffect(()=>{
        getProducts()
    },[])

    return {
        products: [products, setProducts]
    }
}

export default AdoptProductsAPI
