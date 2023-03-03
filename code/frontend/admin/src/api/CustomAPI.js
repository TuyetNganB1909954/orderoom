import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CustomAPI() {
    const [custom, setCustom] = useState([])
    const getCustom = async() => {
        const res = await axios.get('/api/custom')
        setCustom(res.data.custom)
        // console.log(res)
    }
    useEffect(()=>{
        getCustom()
    },[])
  return {
    Custom: [custom, setCustom]
  }
}

export default CustomAPI