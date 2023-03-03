import React, { useEffect, useState } from 'react'
import axios from 'axios'

function RoomAPI() {
    const [room, setRoom] = useState([])
    const getRoom = async() => {
        const res = await axios.get('/api/room')
        setRoom(res.data.room)
        // console.log(res)
    }
    useEffect(()=>{
        getRoom()
    },[])
  return {
    Room: [room, setRoom]
  }
}

export default RoomAPI