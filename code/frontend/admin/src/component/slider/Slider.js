import React from 'react'

function Slider() {
  return (
    <div className='navbar'>
        <div className='text-center  col-12'>
            <div className='py-3'>
                <i className="fa-solid fa-user"></i>
                Tài khoản
            </div>
            <hr className='m-0'/>
        </div>
        
        <div id="menu" className='col-12'>
            <ul>
                <li className='bg-light'><a href="/kindofroom">Quản lý danh mục phòng</a></li>
                <li><a href="/room">Quản lý phòng</a></li>
                <li className='bg-light'><a href="/order">Quản lý đặt phòng</a></li>
                <li><a href="/#">Quản lý nhân viên</a></li>
                <li className='bg-light'><a href="/#">Quản lý trang thiết bị</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Slider