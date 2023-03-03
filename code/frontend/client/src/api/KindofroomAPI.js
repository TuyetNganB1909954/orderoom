import React, { useEffect, useState } from 'react'
import axios from 'axios'

function KindofroomAPI() {
  const [kindofroom, setKindOfRoom] = useState([])
  const getKindOfRoom = async () => {
    const res = await axios.get('/api/kindofroom')
    setKindOfRoom(res.data.kindofroom)
  } 
  useEffect (()=>{
    getKindOfRoom()
  },[])
  return {
    kindofroom: [kindofroom, setKindOfRoom]
  }
}

export default KindofroomAPI