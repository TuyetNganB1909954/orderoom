import React from 'react'
import Slider from './slider/Slider'
import KindOfRoom from './kindofroom/KindOfRoom'
import about from '../../asset/about.jpg'
import { Link } from 'react-router-dom'

function home() {
  return (
    <div>
        <Slider/>
       {/* về chúng tôi */}
        <div className='container'>
            <div className='row'>
                <div className='col-12 about-us d-flex my-5'>
                    <div className='col-7 '>
                       <h1 className='text-center'> Khách sạn Hopy Luxury</h1>
                       <p> Cần Thơ là thành phố trung tâm của vùng đồng bằng sông Cửu Long. Cái tên Cần Thơ xuất phát từ tên cổ "Cầm Thi Giang", gợi vẻ đẹp nên thơ của "đô thị miền sông nước", với hệ thống sông ngòi dày đặc, vườn cây ăn trái bạt ngàn, đồng ruộng mênh mông, nổi tiếng với Bến Ninh Kiều, chợ nổi Cái Răng, nơi vẫn còn lưu giữ một nét sinh hoạt đặc trưng văn hoá Nam Bộ.</p>
                        <p>Được xây dựng vào năm 2015, Hopy Luxury Cần Thơ là khách sạn đầu tiên của chuỗi khách sạn Hopy ở Đồng bằng sông Cửu Long – đồng thời cũng là khách sạn sang trọng đầu tiên và duy nhất tại đây. Nằm tại vị trí đắc địa trước vòng xoay Cồn Cái Khế và là tòa nhà cao nhất thành phố Cần Thơ với 27 tầng, từ cửa sổ khách sạn, du khách có thể ngắm ánh nắng mặt trời trong buổi sớm mai trên sông Hậu hay phóng tầm mắt ngắm nhìn cây cầu Cần Thơ hùng vĩ.</p>
                        <p>Khách sạn tọa lạc tại vị trí cách Sân bay Quốc tế Cần Thơ 10km, cách TPHCM 169 km với giao thông thủy bộ thuận lợi đi đến các vùng Nam Bộ và nối liền với Campuchia.</p>
                        <div className='text-center' >
                            <Link to="!#"> Xem chi tiết</Link>
                        </div>
                    </div>
                    <div className='col-5 p-3'>
                        <img src={about} width={500}/>
                    </div>
                </div>  
            </div>
        </div>
        {/* dich vu */}
        <div className='bg-light'>
            <div className='container'>
                <div className='row'>
                    <div className='service'>
                        <h1> Các dịch vụ và tiện ích</h1>
                        <div className='col-12  d-flex '>
                            <div className='col-4 '>
                                <div className='service-item'>
                                    <div className='service-item-content'>
                                        <i className="fa-solid fa-martini-glass-empty"></i>
                                        <br/>
                                        Nhà hàng và Bar
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 '>
                                <div className='service-item'>
                                    <div className='service-item-content'>
                                       <i className="fa-solid fa-users"></i>
                                        <br/>
                                        Phòng hợp và hội nghị
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 '>
                                <div className='service-item'>
                                    <div className='service-item-content'>
                                        <i className="fa-sharp fa-solid fa-book-open-reader"></i>
                                        <br/>
                                        Dịch vụ khách sạn
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>             
                </div>
            </div>
        </div>
        {/* danh muc phong */}
        <div className='menuroom'>
            <div className='container'>
                <div className='row'>
                    <h1 className='text-start pb-2'>Hạng mục phòng</h1>
                    <KindOfRoom/>
                </div>
            </div>
        </div>
        
        
    </div>

  )
}

export default home