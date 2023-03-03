import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'

function KindOfRoom() {
    const state = useContext(GlobalState)
    const [kindofrooms, setKindOfRoom] = state.KindOfRoomAPI.kindofroom
    console.log(kindofrooms)
  return (
    <div className='kindofroom'>
        <div className='conntainer'>
            <div className='row'>
                {
                    kindofrooms.map( kindofroom => (
                        <div className='col-3 p-0 ' key={kindofroom._id}>
                            <div className='kindofroom-item m-3'>
                                <div className='kindofroom-item-img'>
                                    <img src={kindofroom.KindOfRoomImage} className='img-fluid' />
                                </div>
                                <div className='p-3'>
                                    <p className='kindofroom-item-name m-0'>{kindofroom.KindOfRoomName}</p>
                                    <p className='kindofroom-item-description'>{kindofroom.description}</p>
                                    <p className='kindofroom-item-price m-0'> Chỉ từ <span>{kindofroom.KindOfRoomPrice}</span> VNĐ</p>
                                </div>
                                <div className='text-center p-3 mb-3'>
                                    <Link to={`/kindofroom/${kindofroom._id}`}  className='kindofroom-item-btn'>đặt phòng</Link>
                                </div>
                                
                            </div>
                            
                             
                        </div>
                       
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default KindOfRoom