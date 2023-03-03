import React, { useContext, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GlobalState } from '../../../GlobalState';

const initialState={
    KindOfRoomName:'',
    description:'',
    KindOfRoomPrice:'',
}
function KindOfRoom() {
    const state = useContext(GlobalState)
    const [kindofroom, setKindofroom] = useState(initialState)
    const [KindOfRoomImage, setKindOfRoomImage] = useState(false)

    console.log(KindOfRoomImage)

    const handleChangeInput = e => {
        const {name, value} = e.target
        setKindofroom({...kindofroom, [name]:value})
    }
    const handleSubmit = e => {

    }
    console.log(KindOfRoomImage)

    const handleUpload = async e => {
        e.preventDefault();
        try{
           const file = e.target.files[0]
           console.log(file)
          if(!file) return alert("File không tồn tại")
          if(file.size > 1024*1024) return alert("Kích thước file quá lớn")
          if(file.type !== 'image/jpeg' && file.type !== 'image/png')
            return alert("File không đúng định dạng")
            let formData = new FormData()
            formData.append('file',file)
            const res = await axios.post('/api/uploadimg', formData, {
            })
            setKindOfRoomImage(res.data)
        }catch(error){
          alert(error.response.data.msg)
        }
    }
    const styleUpload = {
        display: KindOfRoomImage ? "block":"none"
    }
  return (
    <div>
        <div className='row'>
            <div className='col-12 '>
                <div className='frame'>
                    <div className='col-12 d-flex'>
                        <div className='col-6'>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Tên loại phòng:</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập vào tên danh mục phòng" name="KindOfRoomName"  value={kindofroom.NameRoom} onChange={handleChangeInput}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Mô tả loại phòng:</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập vào tên danh mục phòng" name="description"  value={kindofroom.NameRoom} onChange={handleChangeInput}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Giá loại phòng:</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập vào tên danh mục phòng" name="KindOfRoomPrice"  value={kindofroom.NameRoom} onChange={handleChangeInput}/>
                                </Form.Group>
                                <Button variant="dark" type="submit" className='mt-3'>
                                    Thêm loại phòng
                                </Button>
                            </Form> 
                        </div>
                        <div className='col-6'>
                            <div className='upload'>
                               
                                <Form.Control type="file" name="KindOfRoomImage" id="file_up" onChange={handleUpload}/>
                                {
                                    <div id="file_img" style={styleUpload}>
                                        <img src={KindOfRoomImage ? KindOfRoomImage.url : ''}/>
                                        <span>X</span>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    
                   
                    
                </div>

            </div>

        </div>
    </div>
  )
}

export default KindOfRoom