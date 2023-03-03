import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Room from './room/Room'
import Home from './Home'

function page() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/kindofroom/:id" element={<Room/>}/>
    </Routes>
  )
}

export default page