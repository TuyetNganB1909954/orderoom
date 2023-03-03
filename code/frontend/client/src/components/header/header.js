import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../asset/logo.png'
import { Link } from 'react-router-dom';

function header() {
  return (
   <header>
        <div className='hearder-top'>
            <div className='container'>
               <div className='row'>
                    <div className='col-2 header-phone'>
                        <i className="fa-solid fa-phone"></i>
                        <span>0123456789</span>
                    </div>
                    <div className='col-2 '>
                        <i className="fa-solid fa-envelope"></i>
                        <span>aaaaa@gmail.com</span>
                    </div>
                    <div className='col-4 text-end header-social'>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div className='col-2 header-order'>
                            <span>Đặt phòng</span>
                    </div>
                    <div className='col-2 text-start '>
                            <i className="fa-solid fa-earth-americas"></i>
                            <span>Ngôn ngữ</span>
                            <i className="fa-solid fa-chevron-down"></i>
                    </div>
               </div>
            </div>
        </div>
        <div className='navbar p-0 '>
            <div className='container '>
                <div className=' col-12 '>
                    <Navbar expand="lg" className='p-0'>
                        <Container fluid>
                            <Navbar.Brand href="#">
                                <Link to="/">
                                    <img src={logo} width='150'/>
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll" >
                            <Nav
                                className="me-auto my-2 my-lg-0 justify-content-end"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Trang Chủ</Nav.Link>
                                <Nav.Link href="#action2">Phòng</Nav.Link>
                                <Nav.Link href="#action2">Về chúng tôi</Nav.Link>
                                <Nav.Link href="#action2">Tin Tức</Nav.Link>
                                <Nav.Link href="#action2">Liên Hệ</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Tìm kiếm"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-white">                            
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </Button>
                            </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
   </header>
  )
}

export default header