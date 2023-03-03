import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GlobalState } from '../../../GlobalState';
import axios from 'axios';

const initialState={
    NameRoom:'',
    stateRoom:''
}

function Room() {
    const state = useContext(GlobalState)
   

    const [rooms] = state.RoomAPI.Room
    const [room, setRoom] = useState(initialState)
    console.log(room)

    const handleChangeInput = e => {
        const {name, value} = e.target
        setRoom({...room, [name]:value})
    }
    const handleSubmit = async e => {
        e.preventDefault();
        try{
            await axios.post('/api/room',{...room})
            alert("Thêm phòng thành công")
            window.location.reload()
        }catch(error){
            alert(error.response.data.msg)
        }
    }

  return (
    <div>
        <div className='frame '>
            <div className='col-6'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tên phòng</Form.Label>
                        <Form.Control type="text" placeholder="Nhập vào tên phòng" name="NameRoom"  value={room.NameRoom} onChange={handleChangeInput}/>
                    </Form.Group>
                    <Form.Label>Trạng thái phòng:</Form.Label>
                    <Form.Select aria-label="Default select example" name="stateRoom"  value={room.stateRoom} onChange={handleChangeInput}>
                        <option></option>
                        <option value="Trống">Trống</option>
                        <option value="Có khách">Có khách</option>
                        <option value="Đang dọn dẹp">Đang dọn dẹp</option>
                        <option value="Đang sửa chữa">Đang sửa chữa</option>
                    </Form.Select>
                    <Button variant="dark" type="submit" className='mt-3'>
                        Thêm phòng
                    </Button>
                </Form>
            </div>
           
        </div>
        <div className='frame bg-light'>
            <h6>Danh sách phòng</h6>
            <div className='row'>
                {
                    rooms.map(room => (
                        <div className='col-2' key={room._id} >
                            <div className='room_item'>
                                <h5>{room.NameRoom}</h5>
                                <p>{room.stateRoom}</p>
                            </div>
                            

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Room