import React from "react";

import {Routes, Route} from 'react-router-dom'
import Room from './Room/Room'
import Order from "../order/Order";
import KindOfRoom from "./KindOfRoom/KindOfRoom";


function page() {
  return (
    
        <Routes>
            <Route path="/room"  element={<Room/>}/> 
            <Route path="/order"  element={<Order/>}/> 
            <Route path="/kindofroom"  element={<KindOfRoom/>}/> 
        </Routes>
       
    
   
  )
}

export default page