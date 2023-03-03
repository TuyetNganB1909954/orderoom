import React, { useContext, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { GlobalState } from '../../GlobalState';
import { Link } from 'react-router-dom';

const initalState = {
    customname: '',
    customaddress: '',
    customphone: '',
    cccd: '',
    orderDate: '',
    room: '',
}

function Order() {
    const state =useContext(GlobalState)
    const [rooms] = state.RoomAPI.Room
    const [customs] = state.CustomAPI.Custom
    const [custom,setCustom] = useState(initalState)
    const[room,setRoom] = useState([])
    // console.log(customs)

    const handleChangeInput = e =>{
        const {name, value} = e.target
        setCustom({...custom,[name]:value})
    }
    const handleSubmit = async e => {
        e.preventDefault();
        try{
            await axios.post('/api/custom',{...custom,room})
            alert("Thêm khách thuê phòng thành công")
            window.location.reload()
        }catch(error){
            alert(error.response.data.msg)
        }
    }
    const handlecheck = (id) => {
        rooms.forEach(Room => {
            if(Room._id == id){
                Room.checked = !Room.checked
                if(Room.checked === true){
                    if(Room._id === id){
                        room.push(Room)
                         axios.patch(`/api/room/${Room._id}`,{stateRoom:"Có khách"})
                   }
                }else{
                    const index = room.findIndex(item => item === Room)
                    room.splice(index,1 )
                    console.log(room)
                }
            }
           
           
        })
    }
  return (
   <>
        <div className='row'>
            <div className='col-6 '>
                <div className='frame'>
                    <div className='text-center'>
                        <h5>Thông tin khách hàng</h5>
                    </div>
                    <div>
                        <Form onSubmit={handleSubmit} >
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Họ và tên:</Form.Label>
                                <Form.Control type="text" placeholder="Nhập vào họ và tên khách thuê phòng" name="customname" value={custom.customname} onChange={handleChangeInput}/>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Số CCCD:</Form.Label>
                                <Form.Control type="text" placeholder="Nhập vào số cccd khách thuê phòng" name="cccd" value={custom.cccd} onChange={handleChangeInput} />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Địa chỉ:</Form.Label>
                                <Form.Control type="text" placeholder="Nhập vào địa chỉ khách thuê phòng" name="customaddress" value={custom.customaddress} onChange={handleChangeInput} />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Số điện thoại:</Form.Label>
                                <Form.Control type="text" placeholder="Nhập vào số điện thoại khách thuê phòng" name="customphone" value={custom.customphone} onChange={handleChangeInput} />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Ngày đặt phòng:</Form.Label>
                                <Form.Control type="datetime-local"  name="orderDate" value={custom.orderDate} onChange={handleChangeInput} />
                            </Form.Group>
                            <Button variant="dark" type="submit" className='mt-3'>
                                Đặt phòng
                            </Button>
                        </Form>
                    </div>
                    
                </div>
            </div>
            <div className='col-6'>
                <div className='room_order'>
                    <div className='row'>
                        {
                            rooms.map(room => (
                                <div className='col-2 p-0' key={room._id} >
                                    <div className='room_order_item'>
                                        <div className='text-end pt-1 pe-2 '>
                                            <Form.Group  controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" checked={room.checked} value={room} onChange={() => handlecheck(room._id)}/>
                                            </Form.Group>
                                            </div>
                                    
                                        <h6 className='fw-bold'>{room.NameRoom}</h6>
                                        <p>{room.stateRoom}</p>
                                    </div>
                                    

                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </div>
            <div className='col-12'>
                <div className='frame mt-0'>
                    <h6 className='text-secondary'>Danh sách khách đặt phòng</h6>
                    <div>
                        <Table striped bordered hover>
                        <thead>
                            <tr className='text-center'>
                                <th>Họ và tên</th>
                                <th>Số CCCD</th>
                                <th>Địa chỉ</th>
                                <th>Số điện thoại</th>
                                <th>Ngày đặt phòng</th>
                                <th>Thuê phòng</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                customs.map(custom =>(
                                    
                                    <tr key={custom._id}>
                                        <td>{custom.customname}</td>
                                        <td>{custom.cccd}</td>
                                        <td>{custom.customaddress}</td>
                                        <td>{custom.customphone}</td>
                                        <td>{custom.orderDate}</td>
                                        <td>
                                            {
                                            custom.room.map(Room =>(
                                                <span>{Room.NameRoom} &ensp;</span>
                                            
                                            ))  
                                            }
                                            
                                        </td>
                                        <td>
                                            <Button variant="dark" type="submit" className=''>
                                                Đổi phòng
                                            </Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" type="submit" className=''>
                                                Trả phòng
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            }
                           
                        </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            

        </div>
   </>
        
    
  )
}

export default Order